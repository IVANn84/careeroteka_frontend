import withStyle from 'react-jss';
import { observer } from 'mobx-react-lite';

import EmailConfirmation from './EmailConfirmation';

const style = () => ({
  container: {
    width: 470,
    margin: '0 auto',
  },
  container_error: {
    width: 554,
    margin: '0 auto',
  },
  info: {
    margin: [32, 'auto', 36, 'auto'],
  },
  button: {
    width: '100%',
  },

  '@media screen and (max-device-width: 576px)': {
    container: {
      width: '100%',
    },
    container_error: {
      width: '100%',
    },
  },
});

export default withStyle(style)(observer(EmailConfirmation));
