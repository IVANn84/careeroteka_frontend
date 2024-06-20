import withStyle from 'react-jss';

import Tools from './Tools';

const style = ({ font }) => ({
  container: {
    padding: [62, 135, 104],
    backgroundColor: '#F2F2F3',
  },
  title: {
    textAlign: 'center',
    marginBottom: 48,
  },
  highlight: {
    color: font.color.alternative,
  },
  list: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    maxWidth: 1170,
    margin: '0 auto',
  },

  '@media screen and (max-device-width: 576px)': {
    container: {
      padding: [60, 16],
    },
    title: {
      marginBottom: 16,
    },
  },
});

export default withStyle(style)(Tools);
