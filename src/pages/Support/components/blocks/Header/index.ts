import withStyle from 'react-jss';
import { observer } from 'mobx-react-lite';

import Header from './Header';

const style = ({ font }) => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: 1170,
    margin: [32, 'auto', 58],
  },
  leftSideContainer: {
    display: 'flex',
  },
  title: {
    fontFamily: 'Montserrat, Inter, sans-serif',
    fontStyle: 'normal',
    fontWeight: font.weight.bold,
    fontSize: 32,
    lineHeight: '40px',
  },

  '@media screen and (max-device-width: 576px)': {
    container: {
      margin: 18,
      marginBottom: 30,
    },
    title: {
      fontWeight: font.weight.extraBold,
      fontSize: 24,
      lineHeight: '29px',
    },
  },
});

export default withStyle(style)(observer(Header));
