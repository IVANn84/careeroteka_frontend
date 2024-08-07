import withStyle from 'react-jss';

import Button from './Button';

const style = ({ button }) => ({
  button: {
    display: 'inline-block',
    width: 'auto',
    minWidth: 125,
    minHeight: 32,
    cursor: ({ isDisabled }) => !isDisabled && 'pointer',
    transition: [['background', '.2s'], ['color', '.2s']],
    padding: ({ mode = 'primary' }) => (mode !== 'secondary' && [[15, 31]]),
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
const Component = withStyle(style as any)(Button);

export default Component;
