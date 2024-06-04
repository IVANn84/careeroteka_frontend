import withStyle from 'react-jss';
import { observer } from 'mobx-react-lite';

import Footer from './Footer';

const style = ({ font }) => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: 1170,
    margin: [62, 'auto', 90],
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

export default withStyle(style)(observer(Footer));
