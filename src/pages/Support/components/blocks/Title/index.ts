import withStyle from 'react-jss';

import Title from './Title';

const style = ({ font }) => ({
  header: {
    maxWidth: 982,
    margin: [0, 'auto'],
    marginBottom: 76,
    textAlign: 'center',
  },
  title: {
    letterSpacing: -2.56,
  },
  highlight: {
    color: font.color.alternative,
  },
  description: {
    maxWidth: 730,
    margin: [36, 'auto', 24, 'auto'],
  },

  '@media screen and (max-device-width: 576px)': {
    header: {
      marginBottom: 22,
      margin: [0, 16],
    },
    title: {
      letterSpacing: 'normal',
    },
    description: {
      margin: [24, 'auto'],
    },
  },
});

export default withStyle(style)(Title);
