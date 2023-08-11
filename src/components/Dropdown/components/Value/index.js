import withStyle from 'react-jss';
import PropTypes from 'prop-types';

import Value from './Value.jsx';

const style = ({
  dropdown: {
    icon,
    padding,
    color,
    placeholder,
    background,
    border,
    valueBoxShadow,
    requireStarColor,
  },
  font,
}) => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: ({ mode }) => background[mode],
    boxShadow: ({ isOpen }) => isOpen && valueBoxShadow,
    borderRadius: ({ isOpen, isReversedY }) => {
      if (isOpen) {
        return isReversedY
          ? [[0, 0, 16, 16]]
          : [[16, 16, 0, 0]];
      }

      return 16;
    },
    padding: ({ isOpen, mode }) => (isOpen && mode !== 'primary'
      ? [[padding.desktop.yAxis + 1, 1, padding.desktop.yAxis + 1, padding.desktop.xAxis + 1]]
      : [[padding.desktop.yAxis, 0, padding.desktop.yAxis, padding.desktop.xAxis]]),
    color: ({ error, selectedValue, mode }) => {
      if (selectedValue) {
        return error
          ? font.color.negative
          : color[mode];
      }

      return error
        ? placeholder[mode]?.negative
        : placeholder[mode]?.default;
    },
    cursor: ({ isDisabled }) => !isDisabled && 'pointer',

    border: ({
      error, selectedValue, isOpen, mode,
    }) => {
      if (isOpen) {
        return 0;
      }

      if (selectedValue) {
        return error
          ? border[mode]?.negative
          : border[mode]?.filled;
      }

      return error
        ? border[mode]?.negative
        : border[mode]?.default;
    },
    opacity: ({ isDisabled }) => isDisabled && 0.5,
    transition: 'box-shadow .2s',
    userSelect: ({ selectedValue }) => !selectedValue && 'none',

    '&:focus': {
      border: ({ mode, isOpen, error }) => {
        if (isOpen) {
          return 0;
        }

        return error
          ? border[mode]?.negative
          : border[mode]?.filled;
      },
    },

    '@media screen and (max-device-width: 576px)': {
      padding: ({ isOpen, mode }) => (isOpen && mode !== 'primary'
        ? [[padding.mobile.yAxis + 1, 1, padding.mobile.yAxis + 1, padding.mobile.xAxis + 1]]
        : [[padding.mobile.yAxis, 0, padding.mobile.yAxis, padding.mobile.xAxis]]),
    },
  },
  requireStar: {
    color: requireStarColor,
  },

  arrow: {
    transform: ({ isOpen }) => (isOpen ? 'rotate(180deg)' : null),

    '&:hover, &:hover': {
      opacity: ({ isDisabled }) => !isDisabled && '1 !important',
    },
  },

  actions: {
    display: 'flex',
    color: ({ error, mode }) => (error
      ? icon.color.negative
      : color[mode]),
    margin: [0, padding.desktop.xAxis, 0, 8],

    '& > *': {
      border: 0,
      width: 24,
      height: 24,
      cursor: ({ isDisabled }) => !isDisabled && 'pointer',
      transition: 'opacity .2s, transform .2s',

      '&:not(:first-child)': {
        marginLeft: 2,
      },

      '&:hover': {
        opacity: ({ isDisabled }) => !isDisabled && '.7',
      },

      '&:focus': {
        outline: 'none',
      },

      '&:active': {
        transition: 'none',
        opacity: ({ isDisabled }) => !isDisabled && '.9',
      },
    },
  },

  '@media screen and (max-device-width: 576px)': {
    button: {
      margin: [0, padding.mobile.xAxis, 0, 8],
    },
  },
});

const Component = withStyle(style)(Value);

Component.propTypes = {
  selectedValue: PropTypes.string,
  placeholder: PropTypes.string,
  isDisabled: PropTypes.bool,
  isRequired: PropTypes.bool,
  toggle: PropTypes.func,
  classes: PropTypes.object,
};

export default Component;
