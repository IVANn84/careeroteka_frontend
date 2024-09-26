import withStyle from 'react-jss';
import { observer } from 'mobx-react-lite';

import Form from './Form';

const style = {
  controls: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    columnGap: 20,
  },
  searchInput: {
    width: 370,
  },
  gradesDropdown: {
    width: 270,
  },
  locationsDropdown: {
    width: 270,
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
      width: 'auto',
      order: 0,
    },
    gradesDropdown: {
      width: 'auto',
      order: 2,
    },
    locationsDropdown: {
      width: 'auto',
      order: 1,
    },
    searchButton: {
      width: '100%',
      order: 3,
    },
  },
};

export default withStyle(style)(observer(Form));
