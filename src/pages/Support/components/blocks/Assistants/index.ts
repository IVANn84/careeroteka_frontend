import withStyle from 'react-jss';

import Assistants from './Assistants';

const style = ({ font }) => ({
  container: {
    maxWidth: 1170,
    margin: [0, 'auto'],
    marginBottom: 78,
  },
  title: {
    maxWidth: 440,
    textAlign: 'center',
    margin: [0, 'auto'],
  },
  highlight: {
    color: font.color.alternative,
  },
  description: {
    maxWidth: 930,
    textAlign: 'center',
    margin: [24, 'auto', 36],
  },
  list: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },

  '@media screen and (max-device-width: 576px)': {
    container: {
      margin: [0, 16, 62],
    },
    description: {
      marginBottom: 28,
    },
    list: {
      rowGap: 29,
    },
  },
});

export default withStyle(style)(Assistants);
