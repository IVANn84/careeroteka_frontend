import withStyle from 'react-jss';
import { observer } from 'mobx-react-lite';

import Vacancies from './Vacancies.jsx';

const style = ({ font: { color } }) => ({
  title: {
    marginBottom: 24,
    marginTop: 24,
    textAlign: 'center',
    paddingRight: 46,
  },
  word: {
    color: color.alternative,
  },
  subTitle: {
    textAlign: 'center',
    paddingRight: 46,

  },
});

export default withStyle(style)(observer(Vacancies));
