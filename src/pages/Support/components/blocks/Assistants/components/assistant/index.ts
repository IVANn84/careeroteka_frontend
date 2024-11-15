import withStyle from 'react-jss';

import Assistant from './Assistant';

const style = {
  container: {
    maxWidth: 270,
  },
  title: {
    margin: [26, 0, 12],
  },
  description: {
    color: '#767779',
  },

  '@media screen and (max-device-width: 576px)': {
    container: {
      maxWidth: 168,
    },
  },
};

export default withStyle(style)(Assistant);
