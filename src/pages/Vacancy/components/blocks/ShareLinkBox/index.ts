import withStyle from 'react-jss';
// import { contentType } from 'mime-types';

import { withIsDisplay } from 'Hoc/withIsDisplay';

import SharedLinkBox from './SharedLinkBox';

const style = ({ dropdown }) => ({
  container: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,

    margin: 'auto',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 'min-content',
    height: 'min-content',
  },

  content: {
    display: 'flex',
    flexDirection: 'column',
    gap: 13,
  },

  buttonResponse: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    width: 430,
    height: 48,
    padding: '12px 16px',
    background: 'none',
    borderRadius: 8,
    borderColor: '#1A1C1F',

    '& > *': {
      fontSize: 16,
      lineHeight: '22px',
    },
  },

  header: {
    position: 'absolute',
    top: '-24px',
    right: '-20px',

    margin: 0,
    borderRadius: '50%',
  },

  contentInner: {
    display: 'flex',
    gap: 4,
    color: 'black',
  },

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

export default withIsDisplay(withStyle(style)(SharedLinkBox));
