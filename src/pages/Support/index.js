import withStyle from 'react-jss';

import Support from './Support.jsx';

const style = {
  container: {
    maxWidth: 1440,
    margin: [0, 'auto'],
  },
  image: {
    display: 'block',
    maxWidth: 1024,
    margin: [0, 'auto'],
    marginBottom: 108,
  },
};

export default withStyle(style)(Support);
