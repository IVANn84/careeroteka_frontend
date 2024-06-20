import withStyle from 'react-jss';

import Support from './Support';

const style = {
  container: {
    margin: [0, 'auto'],
  },
  image: {
    display: 'block',
    width: 1024,
    margin: [0, 'auto'],
    marginBottom: 108,
  },
  footer: {},

  '@media screen and (max-device-width: 576px)': {
    image: {
      padding: [0, 16],
      marginBottom: 62,
    },
    footer: {
      padding: [0, 16, 106],
    },
  },
};

export default withStyle(style)(Support);
