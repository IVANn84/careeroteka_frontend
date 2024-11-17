import withStyle from 'react-jss';

import { withIsDisplay } from 'Hoc/withIsDisplay';

import SmallFilters from './SharedLinkBox';

const style = ({ customScrollbar, dropdown }) => ({
  container: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,

    margin: 'auto',

    display: 'flex',
    flexDirection: 'column',
    width: 429,
    height: 229,
  },
  content: {
    ...customScrollbar,
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  button: {},
  header: {},
  title: {},

  '@media screen and (max-device-width: 576px)': {
    container: {
      width: '100vw',
      justifyContent: 'center',
      position: 'relative',
    },
    content: {
      padding: [0, 16],
      '&::-webkit-scrollbar': {
        display: 'none',
      },
    },
    header: {
      position: 'absolute',
      top: 28,
      right: 0,
    },
    title: {
      marginBottom: 20,
    },
    footer: {
      flexDirection: 'column',
      gap: '16px',
      padding: [0, 32],
    },
    button: {
      width: '100%',
      color: dropdown.placeholder.light.default,
      marginTop: 8,
      '& span': {
        fontSize: 13,
        lineHeight: '19px',
      },
    },
  },
});

export default withIsDisplay(withStyle(style)(SmallFilters));
