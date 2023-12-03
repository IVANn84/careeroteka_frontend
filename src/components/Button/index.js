import withStyle from 'react-jss';
import PropTypes from 'prop-types';

import Button from './Button.jsx';

const style = ({ button }) => ({
  button: {
    display: 'inline-block',
    width: 'auto',
    minWidth: 125,
    minHeight: 32,
    cursor: ({ isDisabled }) => !isDisabled && 'pointer',
    transition: [['background', '.2s'], ['color', '.2s']],
    padding: [[15, 19]],
    textAlign: 'center',
    color: ({ variant = 'filled', mode = 'primary' }) => button[variant][mode].color.default,
    background: ({ variant = 'filled', mode = 'primary', isDisabled }) => (mode === 'light'
      ? isDisabled
        ? button[variant][mode].background.disabled
        : button[variant][mode].background.default
      : button[variant][mode].background.default),
    border: ({ variant = 'filled', mode = 'primary' }) => [[1, 'solid', button[variant][mode].border.default]],
    borderRadius: 16,
    opacity: ({ isDisabled }) => (isDisabled
      ? 0.5
      : 1),

    '&:hover, &:focus-visible': {
      background: ({ isDisabled, variant = 'filled', mode = 'primary' }) => (isDisabled
        ? mode === 'light'
          ? button[variant][mode].background.disabled
          : button[variant][mode].background.default
        : button[variant][mode].background.hovered),
      color: ({ isDisabled, variant = 'filled', mode = 'primary' }) => (isDisabled
        ? button[variant][mode].color.default
        : button[variant][mode].color.hovered),
      border: ({ variant = 'filled', mode = 'primary', isDisabled }) => (!isDisabled && [[1, 'solid', button[variant][mode].border.hovered]]),
    },

    '&:active': {
      transition: 'none',
      background: ({ isDisabled, variant = 'filled', mode = 'primary' }) => (isDisabled
        ? button[variant][mode].background.default
        : button[variant][mode].background.focused),
      color: ({ isDisabled, variant = 'filled', mode = 'primary' }) => (isDisabled
        ? button[variant][mode].color.default
        : button[variant][mode].color.focused),
    },
  },
});

// Кнопка
const Component = withStyle(style)(Button);

Component.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['filled', 'outlined']),
  mode: PropTypes.oneOf(['light', 'dark', 'primary']),
  isDisabled: PropTypes.bool,
  isDisplayed: PropTypes.bool,
  // Описание кнопки при наведении
  title: PropTypes.string,
  onClick: PropTypes.func,
};

Component.defaultProps = {
  variant: 'filled',
  mode: 'primary',
  isDisabled: false,
  isDisplayed: true,
};

export default Component;
