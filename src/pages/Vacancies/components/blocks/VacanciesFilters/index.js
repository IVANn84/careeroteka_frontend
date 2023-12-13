import withStyle from 'react-jss';
import { observer } from 'mobx-react-lite';

import VacanciesFilters from './VacanciesFilters.jsx';

const style = {
  container: {
    marginTop: 36,
    marginBottom: 80,
  },
  controls: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  filtersContainer: {
    display: 'flex',
    columnGap: 30,
  },
  searchButton: {
    minWidth: 370,
  },
  gradesDropdown: {
    minWidth: 270,
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
      marginTop: 24,
      marginBottom: 24,
    },
    controls: {
      display: 'block',
    },
    filtersContainer: {
      flexDirection: 'column',
      rowGap: 14,
    },
    searchButton: {
      minWidth: 'auto',
    },
    gradesDropdown: {
      minWidth: 'auto',
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
