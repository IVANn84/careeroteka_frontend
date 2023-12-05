import withStyle from 'react-jss';
import { memo } from 'react';
import { observer } from 'mobx-react-lite';

import VacanciesList from './VacanciesList.jsx';

const style = {
  container: {
    position: 'relative',
  },
  infiniteScroll: {
    padding: [30],
    margin: [-30],
  },
  vacanciesContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(370px, 1fr))',
    gridGap: '30px',
    alignItems: 'start',
  },

  '@media screen and (max-device-width: 576px)': {
    infiniteScroll: {
      padding: 0,
      margin: 0,
    },
  },
};

export default memo(withStyle(style)(observer(VacanciesList)));
