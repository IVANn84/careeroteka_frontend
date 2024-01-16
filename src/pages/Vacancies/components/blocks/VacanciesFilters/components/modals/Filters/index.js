import withStyle from 'react-jss';

import { withIsDisplay } from 'Hoc/withIsDisplay';

import Filters from './Filters.jsx';

const style = ({ customScrollbar }) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '81vw',
    height: '100%',
  },
  content: {
    paddingTop: 36,
    paddingBottom: 36,
    overflowY: 'scroll',
    ...customScrollbar,
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  button: {
    color: window.theme.button.tetriary.color,
  },

  '@media screen and (max-device-width: 576px)': {
    container: {
      width: '100vw',
    },
    content: {
      padding: [0, 16],
      '&::-webkit-scrollbar': {
        display: 'none',
      },
    },
    footer: {
      flexDirection: 'column',
      gap: '16px',
      padding: [0, 32],
    },
    button: {
      order: 1,
    },
  },
});

export default withIsDisplay(withStyle(style)(Filters));
