import withStyle from 'react-jss';

import Spoiler from './Spoiler';

const style = ({
  dropdown: {
    optionBackground,
    spoiler: {
      color,
    },
  },
}) => ({
  container: {
    display: 'flex',
    fontStyle: 'italic',
    padding: [13, 13, 13, 10],
    cursor: 'pointer',
    transition: 'background .2s ease-in',
    borderRadius: 8,
    color: ({ mode }) => color[mode],

    '&:hover': {
      background: optionBackground.hovered,
    },
  },
});

const Component = withStyle(style)(Spoiler);

export default Component;
