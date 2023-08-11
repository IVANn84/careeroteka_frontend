import withStyle from 'react-jss';
import { observer } from 'mobx-react-lite';

import VacanciesFilters from './VacanciesFilters.jsx';

const style = {
  container: {
    marginTop: 30,
  },
  controls: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  filtersContainer: {
    display: 'flex',
  },
  searchButton: {
    minWidth: 470,
  },
  gradesDropdown: {
    marginLeft: 16,
    minWidth: 300,
  },
  filtersButtonContent: {
    display: 'flex',
    justifyContent: 'center',

    '& > svg': {
      marginRight: 10,
    },
  },

  '@media screen and (max-device-width: 576px)': {
    header: {
      marginBottom: 31,
    },
    controls: {
      flexDirection: 'column',
    },
    searchButton: {
      width: '100%',
    },
  },
};

export default withStyle(style)(observer(VacanciesFilters));