import withStyle from 'react-jss';

import { withIsDisplay } from 'Hoc/withIsDisplay';

import Filters from './Filters';

const style = ({ customScrollbar, button }) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '81vw',
    height: '100%',
  },
  content: {
    overflowY: 'scroll',
    ...customScrollbar,
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  button: {
    color: button.tetriary.color,
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
