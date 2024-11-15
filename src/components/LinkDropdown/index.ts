import withStyle from 'react-jss';
import { memo } from 'react';

import LinkDropdown from './LinkDropdown';

export const Style = ({ font }) => ({
  link: {
    display: 'inline-block',
    cursor: 'pointer',
    marginTop: 18,
    position: 'relative',
    transition: 'color .2s',

    '&::after': {
      content: '""',
      position: 'absolute',
      left: 1,
      right: 1,
      bottom: -2,
      height: 2,
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
});

// Свернуть/развернуть длинный текст или список
const Component = memo(withStyle(Style)(LinkDropdown));

export default Component;
