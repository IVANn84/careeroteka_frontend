import withStyle from 'react-jss';

import Request from './Request';

const style = ({ font }) => ({
  container: {
    backgroundColor: '#F2F2F3',
    padding: [62, 0, 74],
    textAlign: 'center',
  },
  title: {
    maxWidth: 700,
    margin: [0, 'auto'],
  },
  highlight: {
    color: font.color.alternative,
  },
  description: {
    maxWidth: 830,
    margin: [24, 'auto', 30],
  },

  '@media screen and (max-device-width: 576px)': {
    container: {
      padding: [48, 16],
    },
  },
});

export default withStyle(style)(Request);
