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
import { filter } from 'lodash';
// import { match } from 'assert';

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
  customInvalid,
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
  const [isMenuClosed, setIsMenuClosed] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [hasValue, setHasValue] = useState(false);
  const [hasSelection, setHasSelection] = useState(false);
  const [displayValue, setDisplayValue] = useState(value || '');
  const [dropdownItems, setDropdownItems] = useState([]);
  const [activeMenuItemId, setActiveMenuItemId] = useState(null);

  const handleMenuItemFocus = (menuItemId) => {
    setActiveMenuItemId(menuItemId);
  };

  const handleItemClick = (e, onClick) => {
    const clickedValue = e.currentTarget.getAttribute('data-value');
    const clickedId = e.currentTarget.id;

    debugger;
    if (onSelected && clickedValue !== value) {
      onSelected(clickedValue);
    }

    setState(prevState => ({
      ...prevState,
      dropDownItems: [],
      displayValue: clickedValue,
    }));

    setIsMenuClosed(true);

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
        onClick: (e) => handleItemClick(e, onClick),
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

  const handleExpand = () => {
    setIsMenuClosed(!isMenuClosed);

    const newState = {
      dropDownItems: [],
    };

    if (isMenuClosed) {
      setIsActive(true);
      newState.dropDownItems = getItems(state.displayValue);
      newState.errorMessage = '';
    }

    setState(prevState => ({
      ...prevState,
      ...newState,
    }));
  };

  const iconToggle = (
    <IconButton
      className="pgn__form-autosuggest__icon-button"
      data-testid="autosuggest-iconbutton"
      tabindex="-1"
      src={isMenuClosed ? KeyboardArrowDown : KeyboardArrowUp}
      iconAs={Icon}
      size="sm"
      variant="secondary"
      alt={isMenuClosed
        ? intl.formatMessage(messages.iconButtonOpened)
        : intl.formatMessage(messages.iconButtonClosed)}
      onClick={(e) => handleExpand(e, isMenuClosed)}
    />
  );

  const leaveControl = () => {
    // setIsActive(false);

    // setState(prevState => ({
    //   ...prevState,
    //   dropDownItems: [],
    //   errorMessage: !state.displayValue ? errorMessageText : '',
    // }));

    // setIsMenuClosed(true);
  };

  const handleDocumentClick = (e) => {
    if (parentRef.current && !parentRef.current.contains(e.target) && isActive) {
      leaveControl();
    }
  };

  const keyDownHandler = e => {
    if (e.key === 'Escape' && isActive) {
      e.preventDefault();

      if (formControlRef) {
        formControlRef.current.focus();
      }

      setState(prevState => ({
        ...prevState,
        dropDownItems: [],
      }));

      setIsMenuClosed(true);
    }
    if (e.key === 'Tab' && isActive) {
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
    if (value || value === '') {
      setDisplayValue(value);
    }
  }, [value]);

  const handleClick = (e) => {
    // setIsActive(true);
    // const dropDownItems = getItems(e.target.value);

    // if (dropDownItems.length > 1) {
    //   setState(prevState => ({
    //     ...prevState,
    //     dropDownItems,
    //     errorMessage: '',
    //   }));

    //   setIsMenuClosed(false);
    // }
  };

  const handleTextInput = (e) => {
    const userProvidedText = e.target.value;

    if (!userProvidedText.length) {
      setDropdownItems([]);
      setHasValue(false);
      setHasSelection(false);
      setIsMenuClosed(true);
      if (onChange) {
        onChange({
          userProvidedText: '',
          selectionValue: '',
          selectionId: ''
        });
      }
      return;
    }

    setHasValue(true);

    const filteredItems = getItems(userProvidedText);
    setDropdownItems(filteredItems);
    setIsMenuClosed(false);    

    const matchingDropdownItem = filteredItems.find((o) => o.props.children.toLowerCase() === userProvidedText.toLowerCase());
    if (!matchingDropdownItem) {
      setHasSelection(false);
      if (onChange) {
        onChange({
          userProvidedText: userProvidedText,
          selectionValue: '',
          selectionId: ''
        });
      }
      return;
    }

    setHasSelection(true);

    setDisplayValue(matchingDropdownItem.props.children);
    if (onChange) {
      onChange({
        userProvidedText: userProvidedText,
        selectionValue: matchingDropdownItem.props.children,
        selectionId: matchingDropdownItem.props.id
      });
    }
  };

  const isInvalid = () => {
    if (customError) {
      return true;
    }

    if (valueRequired && !hasValue) {
      return true;
    }

    if (selectionRequired && !hasSelection) {
      return true;
    }

    return false;
  }

  const errorMessage = () => {
    if (customError) {
      return customErrorMessageText;
    }

    if (valueRequired && !hasValue) {
      return valueRequiredErrorMessageText;
    }

    if (selectionRequired && !hasSelection) {
      return selectionRequiredErrorMessageText;
    }

    return '';
  }

  const { getControlProps } = useFormGroupContext();
  const controlProps = getControlProps(props);

  return (
    <div className="pgn__form-autosuggest__wrapper" ref={parentRef}>
      <div aria-live="assertive" className="sr-only" data-testid="autosuggest-screen-reader-options-count">
        {`${dropdownItems.length} options found`}
      </div>
      <FormGroupContextProvider
        controlId={controlProps.id}
        isInvalid={isInvalid()}
      >
        <FormControl
          ref={formControlRef}
          aria-expanded={(dropdownItems.length > 0).toString()}
          aria-owns="pgn__form-autosuggest__dropdown-box"
          role="combobox"
          aria-autocomplete="list"
          autoComplete="off"
          value={displayValue}
          aria-invalid={errorMessage()}
          aria-activedescendant={activeMenuItemId}
          onChange={handleTextInput}
          onClick={handleClick}
          trailingElement={iconToggle}
          data-testid="autosuggest-textbox-input"
          {...controlProps}
        />

        {helpMessage && !isInvalid() && (
          <FormControlFeedback type="default">
            {helpMessage}
          </FormControlFeedback>
        )}

        {isInvalid() && (
          <FormControlFeedback type="invalid" feedback-for={controlProps.name}>
            {errorMessage()}
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
  onSelected: null,
  helpMessage: '',
  placeholder: '',
  value: null,
  valueRequired: false,
  valueRequiredErrorMessageText: null,
  selectionRequired: false,
  selectionRequiredErrorMessageText: null,
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
  value: PropTypes.string,
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
