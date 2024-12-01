import withStyle from 'react-jss';

import { withIsDisplay } from 'Hoc/withIsDisplay';

import UnauthorizedBox from './UnauthorizedBox';

const style = () => ({
  container: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,

    margin: 'auto',

    display: 'flex',
    alignItems: 'center',
    width: 'min-content',
    height: 'min-content',
  },

  content: {
    display: 'flex',
    flexDirection: 'column',
    width: 'min-content',
    gap: 13,

    '& > :nth-last-child(2)': {
      textAlign: 'center',
    },
  },

  inputs: {
    '& > *:nth-child(2)': {
      marginTop: 16,
    },
  },
  description: {
    textAlign: 'left',
    fontSize: 14,
  },

  buttonResponse: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    width: 430,
    height: 48,
    margin: '24px 0 0 0',
    padding: '12px 16px',
    background: '#367CF3',
    borderRadius: 8,
    borderColor: '#A3A4A5',

    '& > *': {
      fontSize: 16,
      lineHeight: '22px',
      color: '#1A1C1F',
    },
  },

  header: {
    position: 'absolute',
    top: '-24px',
    right: '-20px',

    border: '1px solid',
    borderRadius: '50%',

    margin: 0,
    background: '#EAEBEB',
  },

  contentInner: {
    display: 'flex',
    justifyContent: 'center',
  },

  link: {
    fontSize: 13,
    color: '#367CF3',
  },

  '@media screen and (max-device-width: 576px)': {
    container: {
      width: '100%',
      flexDirection: 'column',

      margin: ['auto', 0, 0, 0],
    },

    content: {
      gap: 12,
    },

    buttonResponse: {
      width: '91.47vw',
      height: 46,
    },
    header: {
      display: 'none',
    },
  },
});

export default withIsDisplay(withStyle(style)(UnauthorizedBox));
