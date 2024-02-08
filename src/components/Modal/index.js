import withStyle from 'react-jss';
import PropTypes from 'prop-types';

import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import Modal from './Modal.jsx';

const style = ({ background }) => ({
  container: {
    padding: 48,
    borderRadius: 16,
    background: background.primary,
    margin: [0, 'auto'],
  },
  cloak: {
    zIndex: 9999,
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    overflowY: 'auto',
    background: 'rgba(10, 10, 10, 0.57)',
    padding: [['5vh', '5vw']],
    transition: 'opacity .2s ease-in-out',
  },

  '@media screen and (max-device-width: 576px)': {
    container: {
      padding: [24, 0],
      borderRadius: 24,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,

    },
    cloak: {
      padding: [[32, 0, 0, 0]],
    },
  },
});

const ModalComponent = withStyle(style)(Modal);

ModalComponent.propTypes = {
  isDisplayed: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default {
  Modal: ModalComponent,
  Header,
  Content,
  Footer,
};
