import withStyle from 'react-jss';
import { memo } from 'react';

import DropdownWrapper from './Dropdown';

export const dropdownStyle = ({ font }) => ({
  container: {
    position: 'relative',
  },
  cloak: {
    zIndex: 2,
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'transparent',
  },
  error: {
    marginTop: 5,
    fontSize: 15,
    color: font.color.negative,
    textAlign: 'end',
  },
});

// Выпадающий список
const Component = memo(withStyle(dropdownStyle)(DropdownWrapper));

export default Component;
