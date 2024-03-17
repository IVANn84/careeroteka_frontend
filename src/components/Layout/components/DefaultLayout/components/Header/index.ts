import withStyle from 'react-jss';
import { observer } from 'mobx-react-lite';

import Header from './Header';

const style = ({ font }) => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  leftSideContainer: {
    display: 'flex',
  },
  title: {
    fontFamily: 'Montserrat, Inter, sans-serif',
    fontStyle: 'normal',
    fontWeight: font.weight.extraBold,
    fontSize: 24,
    lineHeight: '29px',
  },
});

export default withStyle(style)(observer(Header));
