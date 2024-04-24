import withStyle from 'react-jss';

import FileInput from './FileInput';

const style = ({ font }) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  form: {
    width: '100%',
    textAlign: 'center',
    position: 'relative',
  },

  input: {
    display: 'none',
  },

  label: {
    padding: [60, 0],
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: [1, 'dashed', '#367CF3'],
    borderRadius: 16,
    userSelect: 'none',
  },

  dragActive: {
    borderStyle: 'solid',
  },

  button: {
    cursor: 'pointer',
    position: 'relative',
    marginTop: 24,
    transition: 'color .2s',

    '&::after': {
      content: '""',
      position: 'absolute',
      left: 1,
      right: 1,
      bottom: -2,
      height: 1,
      width: '100%',
      margin: 'auto',
      background: '#000',
      transition: 'background .2s',
    },

    '&:hover, &:focus-visible': {
      color: font.color.alternative,
    },

    '&:hover::after, &:focus-visible::after': {
      background: font.color.alternative,
    },
  },

  dragFileElement: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: '1rem',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },

  valueContainer: {
    display: 'flex',

    '& > span': {
      cursor: 'pointer',
      color: font.color.alternative,
    },

    '& > svg': {
      border: 0,
      width: 22,
      height: 22,
      margin: ['auto', 0, 'auto', 5],
      cursor: ({ isDisabled }) => !isDisabled && 'pointer',
      transition: 'opacity .2s',

      '&:hover': {
        opacity: ({ isDisabled }) => !isDisabled && '.7',
      },

      '&:focus': {
        outline: 'none',
        opacity: ({ isDisabled }) => !isDisabled && '.7',
      },

      '&:active': {
        transition: 'none',
        opacity: ({ isDisabled }) => !isDisabled && '.9',
      },
    },
  },

  error: {
    marginTop: 24,
    fontSize: 15,
    color: font.color.negative,
  },

  labelError: {
    borderColor: font.color.negative,
  },
});

export default withStyle(style)(FileInput);
