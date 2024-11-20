import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { CardContextProvider } from './CardContext';

export const CARD_VARIANTS = ['light', 'dark', 'muted'];

const Card = React.forwardRef(({
  orientation,
  isLoading,
  className,
  isClickable,
  variant,
  bg,
  text,
  border,
  // as,
  ...props
}, ref) => {
  const Component = 'div';

  return (
    <CardContextProvider
      orientation={orientation}
      isLoading={isLoading}
      variant={variant}
    >
      <Component
        {...props}
        className={classNames(
          className,
          'pgn__card',
          'card',
          bg && `bg-${bg}`,
          text && `text-${text}`,
          border && `border-${border}`,
          {
            horizontal: orientation === 'horizontal',
            clickable: isClickable,
            [`pgn__card-${variant}`]: variant,
          },
        )}
        ref={ref}
        tabIndex={isClickable ? 0 : -1}
      />
    </CardContextProvider>
  );
});

export { default as CardColumns } from 'react-bootstrap/CardColumns';
export { default as CardDeck } from './CardDeck';
export { default as CardCarousel } from './CardCarousel/CardCarousel';
export { default as CardImg } from 'react-bootstrap/CardImg';
export { default as CardGroup } from 'react-bootstrap/CardGroup';
export { default as CardGrid } from './CardGrid';

Card.propTypes = {
  /** Specifies class name to append to the base element. */
  className: PropTypes.string,
  /** Specifies which orientation to use. */
  orientation: PropTypes.oneOf(['vertical', 'horizontal']),
  /** Specifies whether the `Card` is clickable, if `true` appropriate `hover` and `focus` styling will be added. */
  isClickable: PropTypes.bool,
  /** Specifies loading state. */
  isLoading: PropTypes.bool,
  /** Specifies `Card` style variant. */
  variant: PropTypes.oneOf(CARD_VARIANTS),
  /** Sets card background */
  bg: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light']),
  /** Sets card text color */
  text: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light', 'white', 'muted']),
  /** Sets card border color */
  border: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light']),
  // as: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
};

Card.defaultProps = {
  className: undefined,
  orientation: 'vertical',
  isClickable: false,
  variant: 'light',
  isLoading: false,
  // as: 'div',
  bg: undefined,
  text: undefined,
  border: undefined,
};

export default Card;
