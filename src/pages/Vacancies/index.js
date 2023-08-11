import withStyle from 'react-jss';
import { observer } from 'mobx-react-lite';

import Vacancies from './Vacancies.jsx';

const style = {
  title: {
    marginBottom: 40,
  },
};

export default withStyle(style)(observer(Vacancies));
