import withStyles from 'react-jss';
import { memo } from 'react';

import Checkbox from './Checkbox';

const style = ({ checkbox }) => ({
  container: {
    width: 'fit-content',
    cursor: 'pointer',

    '& > label': {
      display: 'flex',
      alignItems: 'center',
    },

    '& input': {
      appearance: 'none',
      width: 16,
      minWidth: 16,
      height: 16,
      borderRadius: 2,
      marginRight: 8,
      outline: 'none',
      background: ({ isSelected }) => (isSelected
        ? checkbox.background.selected
        : checkbox.background.unSelected),
      border: ({ isSelected }) => (isSelected
        ? checkbox.border.selected
        : checkbox.border.unSelected),
      padding: ({ isSelected }) => (isSelected
        ? 1
        : 0),
    },
  },
});

export default memo(withStyles(style)(Checkbox));
