import withStyle from 'react-jss';
import { memo } from 'react';
import { observer } from 'mobx-react-lite';

import VacanciesList from './VacanciesList';

const style = () => ({
  infiniteScroll: {
    padding: [30],
    margin: [-30],
    marginBottom: -44,
  },
  vacanciesContainer: {
    display: 'grid',
    justifyContent: 'center',
    gridTemplateColumns: 'repeat(auto-fill, 370px)',
    gap: [[28, 30]],
  },
  banner: {
    width: '100%',
    gridColumn: '1 / -1',
    gridRow: '3 / 4',
    borderRadius: 16,
    cursor: 'pointer',
    minHeight: 180,
    backgroundPositionX: 'center',
    backgroundSize: 'cover',
  },

  '@media screen and (max-device-width: 760px)': {
    vacanciesContainer: {
      gridTemplateColumns: 'repeat(auto-fill, minmax(288px, 343px))',
      gap: [[28, 5]],
    },
  },
  '@media screen and (max-device-width: 375px)': {
    vacanciesContainer: {
      rowGap: 12,
    },
  },
});
export default memo(withStyle(style)(observer(VacanciesList)));
