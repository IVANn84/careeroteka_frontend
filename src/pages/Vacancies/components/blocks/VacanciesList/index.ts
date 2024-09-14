import withStyle from 'react-jss';
import { memo } from 'react';
import { observer } from 'mobx-react-lite';

import VacanciesList from './VacanciesList';

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
    gridTemplateColumns: 'repeat(auto-fit, minmax(370px, 1fr))',
    gap: [[24, 30]],
  },
};

export default memo(withStyle(style)(observer(VacanciesList)));
