import withStyle from 'react-jss';

import Benefits from './Benefits.jsx';

const style = ({ font }) => ({
  container: {
    '& > div': {
      marginBottom: 78,
    },
    '& > div:nth-of-type(even) > img': {
      order: 1,
    },
  },
  title: {
    maxWidth: 491,
    margin: [0, 'auto'],
    marginBottom: 70,
    textAlign: 'center',
  },
  highlight: {
    color: font.color.alternative,
  },
});

export default withStyle(style)(Benefits);
