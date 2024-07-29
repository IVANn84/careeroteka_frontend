import withStyle from 'react-jss';
import { observer } from 'mobx-react-lite';

import VacanciesFilters from './VacanciesFilters';

const style = ({ background }) => ({
  container: {
    marginTop: 36,
    marginBottom: 80,
  },
  button: {},
  profession: {},
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
      flexDirection: 'column',
      rowGap: 20,
      margin: [24, 0],
    },
    button: {
      padding: [12, 18],
      minHeight: 64,
      backgroundColor: background.tetriary,
      borderRadius: 16,
      width: '79%',
      cursor: 'pointer',
    },
    profession: {
      overflowX: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    },
    tabs: {
      marginTop: 0,
    },
    filterButton: {
      minWidth: 'auto',
      position: 'absolute',
      top: 59,
      right: 0,
      padding: [17, 15],
      borderRadius: 16,
      backgroundColor: background.tetriary,

      '&:hover': {
        backgroundColor: background.tetriary,
      },

      '& svg': {
        marginRight: 0,
      },
    },
  },
});

export default withStyle(style)(observer(VacanciesFilters));
