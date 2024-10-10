import withStyle from 'react-jss';
import { observer } from 'mobx-react-lite';

import VacanciesFilters from './VacanciesFilters';

const style = ({ background }) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: '0 8%',
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

  '@media screen and (max-device-width: 760px)': {
    container: {
      display: 'flex',
      flexDirection: 'column',
      rowGap: 20,
      margin: [24, 0],
      padding: '0',
    },
    button: {
      padding: [12, 18],
      minHeight: 64,
      backgroundColor: background.tetriary,
      borderRadius: 16,
      width: '90%',
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
      top: 182,
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

  '@media screen and (max-device-width: 576px)': {
    button: {
      width: '80%',
    },
    filterButton: {
      top: 59,
    },
  },
  '@media screen and (max-device-width: 350px)': {
    button: {
      width: '76%',
    },
  },
});

export default withStyle(style)(observer(VacanciesFilters));
