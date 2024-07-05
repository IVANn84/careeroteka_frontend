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
  searchButton: {
    height: 64,
  },

  '@media screen and (max-device-width: 576px)': {
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
    },
    gradesDropdown: {
      width: 'auto',
    },
    searchButton: {
      width: '100%',
    },
  },
};

export default withStyle(style)(observer(Form));
