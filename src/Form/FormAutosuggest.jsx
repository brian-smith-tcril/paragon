import React, {
  useEffect, useState, useRef,
} from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { useIntl } from 'react-intl';
import { KeyboardArrowUp, KeyboardArrowDown } from '../../icons';
import Icon from '../Icon';
import { FormGroupContextProvider, useFormGroupContext } from './FormGroupContext';
import FormControl from './FormControl';
import FormControlFeedback from './FormControlFeedback';
import IconButton from '../IconButton';
import Spinner from '../Spinner';
import useArrowKeyNavigation from '../hooks/useArrowKeyNavigation';
import messages from './messages';

function FormAutosuggest({
  children,
  arrowKeyNavigationSelector,
  ignoredArrowKeysNames,
  screenReaderText,
  value,
  isLoading,
  valueRequired,
  valueRequiredErrorMessageText,
  selectionRequired,
  selectionRequiredErrorMessageText,
  customError,
  customErrorMessageText,
  onChange,
  helpMessage,
  ...props
}) {
  const intl = useIntl();
  const formControlRef = useRef();
  const parentRef = useArrowKeyNavigation({
    selectors: arrowKeyNavigationSelector,
    ignoredKeys: ignoredArrowKeysNames,
  });
  const [dropdownExpanded, setDropdownExpanded] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [hasValue, setHasValue] = useState(false);
  const [hasSelection, setHasSelection] = useState(false);
  const [displayValue, setDisplayValue] = useState(() => {
    if (!value) {
      return '';
    }

    return value.userProvidedText;
  });
  const [dropdownItems, setDropdownItems] = useState([]);
  const [activeMenuItemId, setActiveMenuItemId] = useState(null);
  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const handleMenuItemFocus = (menuItemId) => {
    setActiveMenuItemId(menuItemId);
  };

  const collapseDropdown = () => {
    setDropdownItems([]);
    setDropdownExpanded(false);
  };

  const handleItemSelect = (e, onClick) => {
    const selectedValue = e.currentTarget.getAttribute('data-value');
    const selectedId = e.currentTarget.id;

    setHasValue(true);
    setHasSelection(true);
    setDisplayValue(selectedValue);

    if (onChange && (!value || (value && selectedValue !== value.selectionValue))) {
      onChange({
        userProvidedText: selectedValue,
        selectionValue: selectedValue,
        selectionId: selectedId,
      });
    }

    collapseDropdown();

    if (onClick) {
      onClick(e);
    }
  };

  function getItems(strToFind = '') {
    let childrenOpt = React.Children.map(children, (child) => {
      // eslint-disable-next-line no-shadow
      const { children, onClick, ...rest } = child.props;
      const menuItemId = child.props.id ?? uuidv4();

      return React.cloneElement(child, {
        ...rest,
        children,
        'data-value': children,
        onClick: (e) => handleItemSelect(e, onClick),
        id: menuItemId,
        onFocus: () => handleMenuItemFocus(menuItemId),
      });
    });

    if (strToFind.length > 0) {
      childrenOpt = childrenOpt
        .filter((opt) => (opt.props.children.toLowerCase().includes(strToFind.toLowerCase())));
    }

    return childrenOpt;
  }

  const expandDropdown = () => {
    setDropdownItems(getItems(displayValue));
    setIsValid(true);
    setErrorMessage('');
    setDropdownExpanded(true);
  };

  const toggleDropdown = () => {
    if (dropdownExpanded) {
      collapseDropdown();
    } else {
      expandDropdown();
    }
  };

  const iconToggle = (
    <IconButton
      className="pgn__form-autosuggest__icon-button"
      data-testid="autosuggest-iconbutton"
      tabindex="-1"
      src={dropdownExpanded ? KeyboardArrowUp : KeyboardArrowDown}
      iconAs={Icon}
      size="sm"
      variant="secondary"
      alt={dropdownExpanded
        ? intl.formatMessage(messages.iconButtonClosed)
        : intl.formatMessage(messages.iconButtonOpened)}
      onClick={toggleDropdown}
    />
  );

  const enterControl = () => {
    setIsActive(true);
  };

  const updateErrorStateAndErrorMessage = () => {
    if (customError) {
      setIsValid(false);
      setErrorMessage(customErrorMessageText);
      return;
    }

    if (valueRequired && !hasValue) {
      setIsValid(false);
      setErrorMessage(valueRequiredErrorMessageText);
      return;
    }

    if (selectionRequired && !hasSelection) {
      setIsValid(false);
      setErrorMessage(selectionRequiredErrorMessageText);
      return;
    }

    setIsValid(true);
    setErrorMessage('');
  };

  const leaveControl = () => {
    setIsActive(false);
    collapseDropdown();
    updateErrorStateAndErrorMessage();
  };

  const keyDownHandler = e => {
    if (!isActive) {
      return;
    }

    if (e.key === 'Escape') {
      e.preventDefault();

      if (formControlRef) {
        formControlRef.current.focus();
      }

      collapseDropdown();
      return;
    }

    if (e.key === 'Tab') {
      leaveControl();
    }
  };

  const handleDocumentClick = (e) => {
    if (parentRef.current && !parentRef.current.contains(e.target) && isActive) {
      leaveControl();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', keyDownHandler);
    document.addEventListener('click', handleDocumentClick, true);

    return () => {
      document.removeEventListener('click', handleDocumentClick, true);
      document.removeEventListener('keydown', keyDownHandler);
    };
  });

  useEffect(() => {
    if (!value) {
      return;
    }

    setDisplayValue(value.userProvidedText);
    setHasSelection(!!value.selectionValue);
  }, [value]);

  const handleTextboxClick = () => {
    expandDropdown();
  };

  const handleTextInput = (e) => {
    const userProvidedText = e.target.value;

    if (!userProvidedText.length) {
      setDisplayValue('');
      setDropdownItems([]);
      setHasValue(false);
      setHasSelection(false);
      collapseDropdown();
      if (onChange) {
        onChange({
          userProvidedText: '',
          selectionValue: '',
          selectionId: '',
        });
      }
      return;
    }

    setHasValue(true);

    const filteredItems = getItems(userProvidedText);
    setDropdownItems(filteredItems);
    // expandDropdown();

    const matchingDropdownItem = filteredItems.find((o) => (
      o.props.children.toLowerCase() === userProvidedText.toLowerCase()
    ));
    if (!matchingDropdownItem) {
      setHasSelection(false);
      setDisplayValue(userProvidedText);
      if (onChange) {
        onChange({
          userProvidedText,
          selectionValue: '',
          selectionId: '',
        });
      }
      return;
    }

    setHasSelection(true);

    setDisplayValue(matchingDropdownItem.props.children);
    if (onChange) {
      onChange({
        userProvidedText: matchingDropdownItem.props.children,
        selectionValue: matchingDropdownItem.props.children,
        selectionId: matchingDropdownItem.props.id,
      });
    }
  };

  const { getControlProps } = useFormGroupContext();
  const controlProps = getControlProps(props);

  return (
    <div className="pgn__form-autosuggest__wrapper" ref={parentRef} onFocus={enterControl}>
      <div aria-live="assertive" className="sr-only" data-testid="autosuggest-screen-reader-options-count">
        {`${dropdownItems.length} options found`}
      </div>
      <FormGroupContextProvider
        controlId={controlProps.id}
        isInvalid={!isValid}
      >
        <FormControl
          ref={formControlRef}
          aria-expanded={(dropdownItems.length > 0).toString()}
          aria-owns="pgn__form-autosuggest__dropdown-box"
          role="combobox"
          aria-autocomplete="list"
          autoComplete="off"
          value={displayValue}
          aria-invalid={errorMessage}
          aria-activedescendant={activeMenuItemId}
          onChange={handleTextInput}
          onClick={handleTextboxClick}
          trailingElement={iconToggle}
          data-testid="autosuggest-textbox-input"
          {...controlProps}
        />

        {helpMessage && isValid && (
          <FormControlFeedback type="default">
            {helpMessage}
          </FormControlFeedback>
        )}

        {!isValid && (
          <FormControlFeedback type="invalid" feedback-for={controlProps.name}>
            {errorMessage}
          </FormControlFeedback>
        )}
      </FormGroupContextProvider>
      <ul
        id="pgn__form-autosuggest__dropdown-box"
        className="pgn__form-autosuggest__dropdown"
        role="listbox"
      >
        {isLoading ? (
          <div className="pgn__form-autosuggest__dropdown-loading">
            <Spinner
              animation="border"
              variant="dark"
              screenReaderText={screenReaderText}
              data-testid="autosuggest-loading-spinner"
            />
          </div>
        ) : dropdownItems.length > 0 && dropdownItems}
      </ul>
    </div>
  );
}

FormAutosuggest.defaultProps = {
  arrowKeyNavigationSelector: 'a:not(:disabled),li:not(:disabled, .btn-icon),input:not(:disabled)',
  ignoredArrowKeysNames: ['ArrowRight', 'ArrowLeft'],
  isLoading: false,
  className: null,
  floatingLabel: null,
  onChange: null,
  helpMessage: '',
  placeholder: '',
  value: null,
  valueRequired: false,
  valueRequiredErrorMessageText: null,
  selectionRequired: false,
  selectionRequiredErrorMessageText: null,
  customError: false,
  customErrorMessageText: null,
  readOnly: false,
  children: null,
  name: 'form-autosuggest',
  screenReaderText: 'loading',
};

FormAutosuggest.propTypes = {
  /**
   * Specifies the CSS selector string that indicates to which elements
   * the user can navigate using the arrow keys
  */
  arrowKeyNavigationSelector: PropTypes.string,
  /** Specifies ignored hook keys. */
  ignoredArrowKeysNames: PropTypes.arrayOf(PropTypes.string),
  /** Specifies loading state. */
  isLoading: PropTypes.bool,
  /** Specifies class name to append to the base element. */
  className: PropTypes.string,
  /** Specifies floating label to display for the input component. */
  floatingLabel: PropTypes.string,
  /** Specifies onChange event handler. */
  onChange: PropTypes.func,
  /** Specifies help information for the user. */
  helpMessage: PropTypes.string,
  /** Specifies the placeholder text for the input. */
  placeholder: PropTypes.string,
  /** Specifies values for the input. */
  value: PropTypes.shape({
    userProvidedText: PropTypes.string,
    selectionValue: PropTypes.string,
    selectionId: PropTypes.string,
  }),
  /** Specifies if empty values trigger an error state */
  valueRequired: PropTypes.bool,
  /** Informs user they must input a value. */
  valueRequiredErrorMessageText: PropTypes.string,
  /** Specifies if freeform values trigger an error state */
  selectionRequired: PropTypes.bool,
  /** Informs user they must make a selection. */
  selectionRequiredErrorMessageText: PropTypes.string,
  /** Specifies the control is in a consumer provided error state */
  customError: PropTypes.bool,
  /** Informs user of other errors. */
  customErrorMessageText: PropTypes.string,
  /** Specifies the name of the base input element. */
  name: PropTypes.string,
  /** Selected list item is read-only. */
  readOnly: PropTypes.bool,
  /** Specifies the content of the `FormAutosuggest`. */
  children: PropTypes.node,
  /** Specifies the screen reader text */
  screenReaderText: PropTypes.string,
};

export default FormAutosuggest;
