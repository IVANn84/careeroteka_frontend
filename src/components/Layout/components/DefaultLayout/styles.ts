import withStyle from 'react-jss';
import { observer } from 'mobx-react-lite';

import DefaultLayout from './DefaultLayout';

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

  // I don't know exactly where else this layer occurs,
  // so I left both optionsI

  '@media screen and (max-device-width: 760px)': {
    container: {
      padding: [18, 28, 47, 28],
    },

    contentContainer: {
      margin: [38, 0, 50, 0],
    },
  },

  '@media screen and (max-device-width: 576px)': {
    container: {
      padding: [18, layout.paddingX.mobile, 32, layout.paddingX.mobile],
    },

    contentContainer: {
      margin: [38, 0, 50, 0],
    },
  },
});

// Основной лейаут
const Component = withStyle(style)(observer(DefaultLayout));

export default Component;
