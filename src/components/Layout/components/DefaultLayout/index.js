import withStyle from 'react-jss';
import { observer } from 'mobx-react-lite';
import PropTypes from 'prop-types';

import DefaultLayout from './DefaultLayout.jsx';

const style = ({ layout }) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    padding: [30, layout.paddingX.desktop, 70, layout.paddingX.desktop],
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    flex: 1,
    margin: [60, 0, 100, 0],
  },

  '@media screen and (max-device-width: 576px)': {
    container: {
      padding: [16, layout.paddingX.mobile, 100, layout.paddingX.mobile],
    },

    contentContainer: {
      margin: [60, 0, 50, 0],
    },
  },
});

// Основной лейаут
const Component = withStyle(style)(observer(DefaultLayout));

Component.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
  ]).isRequired,
  classes: PropTypes.object,
};

export default Component;
