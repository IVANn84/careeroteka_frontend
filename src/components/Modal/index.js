import withStyle from 'react-jss';
import PropTypes from 'prop-types';

import Modal from './Modal.jsx';
import Content from './components/Content';
import Footer from './components/Footer';

const style = {
    container: {
        padding: [24, 36],
        borderRadius: 18,
        background: '#FFF',
    },
    cloak: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        margin: 'auto',
        position: 'fixed',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        overflowY: 'auto',
        background: 'rgba(0,0,0, 0.3)',
        padding: [['5vh', '5vw']],
        transition: 'opacity .2s ease-in-out',
    },
};

const ModalComponent = withStyle(style)(Modal);

ModalComponent.propTypes = {
    isDisplayed: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default {
    Modal: ModalComponent,
    Content,
    Footer,
};