import withStyle from 'react-jss';
import { observer } from 'mobx-react-lite';

import DefaultLayout from './DefaultLayout.brunoyam';

const style = ({ layout, background, font }) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    padding: [28, layout.paddingX.desktop, 38, layout.paddingX.desktop],
    backgroundColor: background.primary,
    color: font.color.regular,
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    flex: 1,
    margin: [60, 0, 100, 0],
  },

  containerAuth: {
    height: '100vh',
    padding: [28, layout.paddingX.desktop, 28, layout.paddingX.desktop],
    backgroundImage: 'linear-gradient(90deg, #DA6631 46.3%, #FFFFFF 46.3%)',
    color: font.color.regular,
  },
  contentContainerAuth: {
    display: 'flex',
    alignItems: 'center',
    height: 'calc(100% - 29px)',
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    gap: '11%',
    width: '100%',
  },
  contentHeader: {
    flexBasis: '40%',
    flexShrink: 0,
    color: font.color.light,
  },
  contentText: {
    margin: [28, 0, 18, 0],
  },
  contentBody: {
    flexBasis: '34%',

    '& > :last-child': {
      alignItems: 'flex-start',
      marginRight: 0,

      '& > h1': {
        fontSize: '36px',
        textAlign: 'left',
        lineHeight: '42px',
      },
      '& > p': {
        textAlign: 'left',
      },
    },
  },
  contentFooter: {
    backgroundColor: background.alternative,
    borderRadius: [36, 36, 36, 0],
    padding: [56, 16, 77, 16],
    color: font.color.light,
  },
  contentTitle: {
    marginBottom: 23,
  },

  '@media screen and (max-device-width: 576px)': {
    container: {
      padding: [18, layout.paddingX.mobile, 32, layout.paddingX.mobile],
    },
    contentContainer: {
      margin: [38, 0, 50, 0],
    },

    containerAuth: {
      padding: [18, layout.paddingX.mobile, 32, layout.paddingX.mobile],
      backgroundImage: 'none',
      height: 'auto',
    },
    contentContainerAuth: {
      display: 'block',
      margin: [65, 0, 40, 0],
    },
    content: {
      display: 'block',
    },
    contentBody: {
      display: 'block',
      marginBottom: 30,

      '& > :last-child > h1': {
        fontSize: '28px',
        lineHeight: '34px',
      },
    },
  },
});

// Основной лейаут
const Component = withStyle(style)(observer(DefaultLayout));

export default Component;
