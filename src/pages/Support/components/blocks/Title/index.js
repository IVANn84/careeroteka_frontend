import withStyle from 'react-jss';

import Title from './Title.jsx';

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
});

export default withStyle(style)(Title);
