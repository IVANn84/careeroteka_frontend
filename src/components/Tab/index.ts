import withStyle from 'react-jss';

import Tab from './Tab';

const style = ({ font }) => ({
  tab: {
    display: 'inline-block',
    color: font.color.secondary,
    cursor: 'pointer',
    transition: 'opacity .2s',
    textAlign: 'center',

    '&:hover, &:focus-visible': {
      opacity: 0.8,
    },

    '& > svg': {
      display: 'block',
      margin: 'auto',
      marginBottom: 16,
    },
  },
  selectedTab: {
    color: font.color.alternative,
  },

  '@media screen and (max-device-width: 576px)': {
    tab: {
      '& > svg': {
        marginBottom: 6,
      },
    },
  },
});

const Component = withStyle(style)(Tab);

export default Component;
