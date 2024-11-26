/**
 * This module creates and exports custom StyleDictionary instance for Paragon.
 */
const toml = require('js-toml');
const chroma = require('chroma-js');
const { colorYiq, darken, lighten } = require('./sass-helpers');
const cssUtilities = require('./css-utilities');
const { composeBreakpointName, createCustomHeader } = require('./utils');

/**
 * Transforms a color token based on various modifications.
 *
 * @param {Object} token - The token object containing color information and modifications.
 * @param {string} token.name - The name of the color token.
 * @param {string} token.$value - The initial color value of the token.
 * @param {Object} token.original - The original token object containing the original value.
 * @param {string} token.original.$value - The original color value before any modifications.
 * @param {Array} [token.modify=[]] - An array of modification objects to apply to the color.
 * @param {string} token.modify.type - The type of modification to apply (e.g., 'mix', 'darken', 'lighten').
 * @param {number} token.modify.amount - The amount by which to modify the color (e.g., percentage or value).
 * @param {string} [token.modify.otherColor] - The other color to mix with, if applicable.
 * @param {string} [token.modify.light] - The light color for YIQ modification.
 * @param {string} [token.modify.dark] - The dark color for YIQ modification.
 * @param {number} [token.modify.threshold] - The threshold for YIQ modification.
 * @param {Object} theme - The theme object containing additional information for color transformations.
 * @returns {string} - The transformed color value in hexadecimal format, including alpha if applicable.
 */
const colorTransform = (token, theme) => {
  const {
    name: tokenName,
    $value,
    original,
    modify = [],
  } = token;
  const reservedColorValues = ['inherit', 'initial', 'revert', 'unset', 'currentColor', 'none'];

  if (reservedColorValues.includes(original.$value)) {
    return original.$value;
  }

  let color = chroma($value);

  if (modify && modify.length > 0) {
    modify.forEach((modifier) => {
      const { type, amount, otherColor } = modifier;
      switch (type) {
        case 'mix':
          color = color.mix(otherColor, amount, 'rgb');
          break;
        case 'color-yiq': {
          const { light, dark, threshold } = modifier;
          color = colorYiq({
            tokenName,
            backgroundColor: color,
            light,
            dark,
            threshold,
            theme,
          });
          break;
        }
        case 'darken':
          color = darken(color, amount);
          break;
        case 'lighten':
          color = lighten(color, amount);
          break;
        default:
          color = color[type](amount);
      }
    });
  }

  return color.hex('rgba').toUpperCase();
};

/**
 * Custom formatter that extends default css/variables format to allow specifying
 * 1. 'outputReferences' per token (by default you are only able to specify it globally for all tokens)
 * 2. 'theme' to output only theme's variables (e.g, 'light' or 'dark'), if theme is not provided - only
 * core tokens are built.
 */
const createCustomCSSVariables = async ({
  formatterArgs,
  themeVariant,
}, StyleDictionary) => {
  // eslint-disable-next-line import/no-unresolved
  const { sortByReference, usesReferences, getReferences } = (await import('style-dictionary/utils'));
  const { dictionary, options, file } = formatterArgs;
  const outputTokens = themeVariant
    ? dictionary.allTokens.filter(token => token.filePath.includes(themeVariant))
    : dictionary.allTokens;

  const variables = outputTokens.sort(sortByReference(dictionary)).map(token => {
    let { $value } = token;

    const outputReferencesForToken = (token.original.outputReferences === false) ? false : options.outputReferences;

    if (usesReferences(token.original.$value) && outputReferencesForToken) {
      const refs = getReferences(token.original.$value, dictionary.tokens);
      refs.forEach(ref => {
        $value = $value.replace(ref.$value, `var(--${ref.name})`);
      });
    }

    return `  --${token.name}: ${$value};`;
  }).join('\n');

  return `${createCustomHeader(StyleDictionary, file).join('\n')}\n:root {\n${variables}\n}\n`;
};

/**
 * Initializes and configures Style Dictionary with custom transforms, formatters, filters, and parsers.
 *
 * @returns {Promise<Object>} - A promise that resolves to the configured Style Dictionary instance.
 */
const initializeStyleDictionary = async () => {
  // eslint-disable-next-line import/no-unresolved
  const StyleDictionary = (await import('style-dictionary')).default;
  // eslint-disable-next-line import/no-unresolved
  const { getReferences } = (await import('style-dictionary/utils'));

  /**
   * Transformer that applies SASS color functions to tokens.
   */
  StyleDictionary.registerTransform({
    name: 'color/sass-color-functions',
    transitive: true,
    type: 'value',
    filter: (token) => token.attributes.category === 'color' || token.$value?.toString().startsWith('#'),
    transform: (token) => colorTransform(token),
  });

  /**
   * Transforms that implements str-replace from SASS.
   */
  StyleDictionary.registerTransform({
    name: 'str-replace',
    transitive: true,
    type: 'value',
    filter: (token) => token.modify && token.modify[0].type === 'str-replace',
    transform: (token) => {
      const { $value, modify } = token;
      const { toReplace, replaceWith } = modify[0];
      return $value.replaceAll(toReplace, replaceWith);
    },
  });

  /**
   * The custom formatter to create CSS variables for core tokens.
   */
  StyleDictionary.registerFormat({
    name: 'css/custom-variables',
    format: formatterArgs => createCustomCSSVariables({ formatterArgs }, StyleDictionary),
  });

  /**
   * Formatter to generate CSS utility classes.
   * Looks in ./src/utilities/ to get utility classes configuration, filters tokens by 'filters' object attributes
   * (see https://amzn.github.io/style-dictionary/#/tokens?id=category-type-item for possible keys in the object,
   * each key should have a list of valid values) and generates CSS classes with using functions defined in
   * 'utilityFunctionsToApply' list, those functions must be located in css-utilities.js module and return string.
   */
  StyleDictionary.registerFormat({
    name: 'css/utility-classes',
    format: async ({ dictionary, file }) => {
      const { utilities } = dictionary.tokens;
      if (!utilities) {
        return '';
      }

      let utilityClasses = '';

      utilities.forEach(({ filters, utilityFunctionsToApply }) => {
        let tokens = dictionary.allTokens;

        Object.entries(filters).forEach(([attributeName, allowedValues]) => {
          tokens = tokens.filter((token) => allowedValues.includes(token.attributes[attributeName]));
        });

        // eslint-disable-next-line no-restricted-syntax
        for (const token of tokens) {
          // Get action token by reference
          const ref = getReferences(token.original.actions.default, dictionary.tokens)[0];
          token.actions = { default: `var(--${ref.name})` };
          // eslint-disable-next-line no-restricted-syntax
          for (const funcName of utilityFunctionsToApply) {
            utilityClasses += cssUtilities[funcName](token);
          }
        }
      });

      return `${createCustomHeader(StyleDictionary, file).join('\n')}\n${utilityClasses}`;
    },
  });

  /**
   * Formatter to generate CSS custom media queries for responsive breakpoints.
   * Gets input about existing tokens of the 'size' category,
   * 'breakpoints' subcategory, and generates a CSS custom media queries.
   */
  StyleDictionary.registerFormat({
    name: 'css/custom-media-breakpoints',
    format: ({ dictionary, file }) => {
      const { breakpoint } = dictionary.tokens.size;

      let customMediaVariables = '';
      const breakpoints = Object.values(breakpoint || {});

      for (let i = 0; i < breakpoints.length; i++) {
        const [currentBreakpoint, nextBreakpoint] = [breakpoints[i], breakpoints[i + 1]];
        customMediaVariables
          += `${composeBreakpointName(currentBreakpoint.name, 'min')} (min-width: ${currentBreakpoint.$value});\n`;
        if (nextBreakpoint) {
          customMediaVariables
            += `${composeBreakpointName(currentBreakpoint.name, 'max')} (max-width: ${nextBreakpoint.$value});\n`;
        }
      }

      return `${createCustomHeader(StyleDictionary, file).join('\n')}\n${customMediaVariables}`;
    },
  });

  /**
   * Custom file header for custom and built-in formatters.
   */
  StyleDictionary.registerFileHeader({
    name: 'customFileHeader',
    fileHeader: () => {
      const currentDate = new Date().toUTCString();
      return [
        '/*',
        ' * IMPORTANT: This file is the result of assembling design tokens.',
        ' * Do not edit directly.',
        ` * Generated on ${currentDate}`,
        ' */',
        '',
      ];
    },
  });

  /**
   * Registers a filter `isSource` that filters output to only include tokens
   * that are marked as `isSource` in their metadata.
   */
  StyleDictionary.registerFilter({
    name: 'isSource',
    filter: token => token.isSource === true,
  });

  /**
   * Registers a custom TOML parser with Style Dictionary.
   */
  StyleDictionary.registerParser({
    name: 'toml-parser',
    pattern: /\.toml$/,
    parser: ({ contents }) => toml.load(contents),
  });

  return StyleDictionary;
};

module.exports = {
  initializeStyleDictionary,
  createCustomCSSVariables,
  colorTransform,
};
