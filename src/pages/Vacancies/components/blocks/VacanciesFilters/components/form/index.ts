import withStyle from 'react-jss';
import { observer } from 'mobx-react-lite';

import Form from './Form';

const style = {
  controls: {
    display: 'flex',
    justifyContent: 'space-between',
    columnGap: 20,
  },
  searchInput: {
    display: 'flex',
    flex: '1 1 370px',
  },
  gradesDropdown: {
    display: 'flex',
    flex: '1 1 310px',
  },
  locationsDropdown: {
    display: 'flex',
    flex: '1 1 310px',
  },
  searchButton: {
    height: 64,
  },

  '@media screen and (max-device-width: 760px)': {
    controls: {
      flexDirection: 'column',
      alignItems: 'stretch',
      rowGap: 14,
    },
    filtersContainer: {
      width: '100%',
      flexDirection: 'column',
      rowGap: 14,
    },
    searchInput: {
      flex: '1 1 auto',
      order: 0,
    },
    gradesDropdown: {
      flex: '1 1 auto',
      order: 2,
    },
    locationsDropdown: {
      flex: '1 1 auto',
      order: 1,
    },
    searchButton: {
      width: '100%',
      order: 3,
    },
  },
};

export default withStyle(style)(observer(Form));
