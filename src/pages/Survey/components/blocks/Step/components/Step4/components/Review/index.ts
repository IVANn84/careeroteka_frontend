import withStyle from 'react-jss';

import Review from './Review';

const style = ({ font }) => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    wordBreak: 'break-word',
    marginBottom: 12,
  },
  description: {
    color: '#525252',
    maxWidth: 360,
  },
  stars: {
    display: 'flex',
    height: 24,
    color: font.color.alternative,
    cursor: 'pointer',
  },
});

export default withStyle(style)(Review);
