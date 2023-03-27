import Page from './Page.jsx';
import PropTypes from 'prop-types';

Page.propTypes = {
    isDisplayed: PropTypes.bool,
    children: PropTypes.node.isRequired,
};

export default Page;