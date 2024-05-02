import withStyle from 'react-jss';

import Tool from './Tool';

const style = {
  container: {
    maxWidth: 270,
    borderRadius: 24,
    padding: [26, 16],
    backgroundColor: '#FFFFFF',
  },
  title: {
    margin: [26, 0, 12],
  },
  description: {
    color: '#767779',
  },
};

export default withStyle(style)(Tool);
