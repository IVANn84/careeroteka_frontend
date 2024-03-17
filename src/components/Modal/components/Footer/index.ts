import withStyle from 'react-jss';

import Footer from './Footer';

const style = {
  container: {
    marginTop: 36,
  },
  '@media screen and (max-device-width: 576px)': {
    container: {
      marginTop: 24,
      padding: [0, 16],
    },
  },
};

const Component = withStyle(style)(Footer);

export default Component;
