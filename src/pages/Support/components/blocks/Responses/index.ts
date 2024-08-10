import withStyle from 'react-jss';

import Responses from './Responses';

const style = ({ font }) => ({
  container: {
    maxWidth: 948,
    margin: [0, 'auto'],
    marginBottom: 78,
    textAlign: 'center',
  },
  highlight: {
    color: font.color.alternative,
  },
  description: {
    margin: [24, 'auto'],
  },
  link: {
    color: font.color.alternative,
  },
  iconsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 36,
  },
  icon: {
    width: 90,
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },

  '@media screen and (max-device-width: 576px)': {
    container: {
      margin: [0, 16],
      marginBottom: 62,
    },
    iconsContainer: {
      marginTop: 27,
      padding: [0, 23],
      gap: 38,
    },
    icon: {
      width: 64,
      gap: 10,
    },
  },
});

export default withStyle(style)(Responses);
