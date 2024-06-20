import withStyle from 'react-jss';

import Benefits from './Benefits';

const style = ({ font }) => ({
  container: {
    maxWidth: 1440,
    margin: [0, 'auto'],

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

  '@media screen and (max-device-width: 576px)': {
    container: {
      margin: [0, 16],

      '& > div': {
        marginBottom: 40,

        '& > img': {
          order: 1,
        },
      },

      '& > div:last-of-type': {
        marginBottom: 60,
      },
    },
    title: {
      marginBottom: 32,
    },
  },
});

export default withStyle(style)(Benefits);
