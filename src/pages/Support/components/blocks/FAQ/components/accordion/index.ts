import withStyle from 'react-jss';

import Accordion from './Accordion';

const style = () => ({
  accordion: {
    '& li:not(:last-child)': {
      marginBottom: 20,
    },
  },

  '@media screen and (max-device-width: 576px)': {
    accordion: {
      '& li:not(:last-child)': {
        marginBottom: 16,
      },
    },
  },
});

export default withStyle(style)(Accordion);
