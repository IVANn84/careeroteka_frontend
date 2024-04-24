import withStyle from 'react-jss';
import { observer } from 'mobx-react-lite';

import Header from './Header';

const style = ({ font }) => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: 1170,
    margin: [32, 'auto', 58, 'auto'],
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
});

export default withStyle(style)(observer(Header));
