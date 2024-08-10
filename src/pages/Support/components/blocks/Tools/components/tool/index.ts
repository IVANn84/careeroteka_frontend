import withStyle from 'react-jss';

import Tool from './Tool';

const style = {
  container: {
    width: 270,
    flexShrink: 0,
    borderRadius: 24,
    paddingTop: 22,
    paddingBottom: 26,
    backgroundColor: '#FFFFFF',
    whiteSpace: 'normal',
  },
  info: {
    margin: [0, 16],
  },
  title: {
    margin: [26, 0, 12],
  },
  description: {
    color: '#767779',
  },
};

export default withStyle(style)(Tool);
