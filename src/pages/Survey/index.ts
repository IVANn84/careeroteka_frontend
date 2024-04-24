import withStyle from 'react-jss';
import { observer } from 'mobx-react-lite';

import Survey from './Survey';

const style = {
  container: {
    display: 'flex',
    flex: 1,
  },
};

export default withStyle(style)(observer(Survey));
