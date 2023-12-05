import withStyle from 'react-jss';
import { observer } from 'mobx-react-lite';

import Vacancies from './Vacancies.jsx';

const style = ({ font: { color } }) => ({
  '@keyframes show': {
    '0%': { marginTop: -162 },
    '5%': { marginTop: -108 },
    '33%': { marginTop: -108 },
    '38%': { marginTop: -54 },
    '66%': { marginTop: -54 },
    '71%': { marginTop: 0 },
    '99.99%': { marginTop: 0 },
    '100%': { marginTop: -162 },
  },

  title: {
    display: 'flex',
    justifyContent: 'center',
    columnGap: 8,
    marginBottom: 24,
    marginTop: 24,
    textAlign: 'center',
    paddingRight: 46,
  },

  flip: {
    height: 59,
    overflow: 'hidden',

    '& > div:first-child': {
      animation: '$show 12s linear infinite',
    },
  },
  word: {
    color: color.alternative,
    textAlign: 'left',
  },
  subTitle: {
    textAlign: 'center',
    paddingRight: 46,

  },
});

export default withStyle(style)(observer(Vacancies));
