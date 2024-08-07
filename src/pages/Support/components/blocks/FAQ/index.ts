import withStyle from 'react-jss';

import Faq from './Faq';

const style = ({ font }) => ({
  container: {
    margin: [78, 'auto', 0],
    maxWidth: 1170,
  },
  title: {
    maxWidth: 700,
    margin: [0, 'auto'],
    textAlign: 'center',
    marginBottom: 32,
  },
  highlight: {
    color: font.color.alternative,
  },

  '@media screen and (max-device-width: 576px)': {
    container: {
      margin: [56, 16, 64],
    },
    title: {
      marginBottom: 24,
    },
  },
});

export default withStyle(style)(Faq);
