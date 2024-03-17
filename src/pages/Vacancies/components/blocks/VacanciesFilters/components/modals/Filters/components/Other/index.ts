import withStyle from 'react-jss';

import Other from './Other';

const style = {
  container: {
    margin: [36, 0],
  },

  '@media screen and (max-device-width: 576px)': {
    container: {
      margin: [28, 0],
    },
  },
};

export default withStyle(style)(Other);
