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
    marginBottom: -44,
  },
  vacanciesContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, 370px)',
    gap: [[24, 30]],
    alignItems: 'start',
    justifyContent: 'center',
  },

  '@media screen and (max-device-width: 576px)': {
    infiniteScroll: {
      padding: 0,
      margin: 0,
      overflow: 'visible !important',
      marginBottom: -20,
    },
    vacanciesContainer: {
      gridTemplateColumns: '1fr',
      gap: 16,
    },
  },
};

export default memo(withStyle(style)(observer(VacanciesList)));
