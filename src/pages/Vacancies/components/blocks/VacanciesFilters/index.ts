import withStyle from 'react-jss';
import { observer } from 'mobx-react-lite';

import VacanciesFilters from './VacanciesFilters';

const style = {
  container: {
    marginTop: 36,
    marginBottom: 80,
  },
  controls: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  filtersContainer: {
    display: 'flex',
    columnGap: 30,
  },
  searchInput: {
    width: 370,
  },
  gradesDropdown: {
    width: 270,
  },
  searchButton: {
    height: 64,
  },
  tabs: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 48,
  },
  filterButton: {},
  filtersButtonContent: {
    display: 'flex',
    justifyContent: 'center',

    '& > svg': {
      marginRight: 8,
    },
  },

  '@media screen and (max-device-width: 576px)': {
    container: {
      display: 'flex',
      flexDirection: 'column-reverse',
      rowGap: 24,
      margin: [24, 0],
    },
    controls: {
      flexDirection: 'column',
      rowGap: 14,
    },
    filtersContainer: {
      width: '100%',
      flexDirection: 'column',
      rowGap: 14,
    },
    searchInput: {
      width: 'auto',
    },
    gradesDropdown: {
      width: 'auto',
    },
    searchButton: {
      width: '100%',
    },
    tabs: {
      marginTop: 0,
    },
    filterButton: {
      minWidth: 'auto',
      position: 'absolute',
      top: 22,
      right: 0,
    },
  },
};

export default withStyle(style)(observer(VacanciesFilters));
