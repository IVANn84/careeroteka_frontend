import withStyle from 'react-jss';

import Benefit from './Benefit';

const style = {
  container: {
    display: 'flex',
    marginLeft: 135,
    marginRight: 135,
    gap: 71,
    alignItems: 'center',
  },
  image: {
    width: 729,
  },
  title: {
    color: ({ color }) => color,
    marginBottom: 20,
  },
  link: {
    display: 'block',
    color: ({ color }) => color,
    marginTop: 24,
  },

  '@media screen and (max-device-width: 576px)': {
    container: {
      flexDirection: 'column',
      marginLeft: 0,
      marginRight: 0,
      gap: 26,
    },
    title: {
      marginBottom: 16,
    },
  },
};

export default withStyle(style)(Benefit);
