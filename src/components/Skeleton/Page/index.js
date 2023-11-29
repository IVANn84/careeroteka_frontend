import PropTypes from 'prop-types';

import Page from './Page.jsx';

Page.propTypes = {
  isDisplayed: PropTypes.bool,
  children: PropTypes.node,
};

export default Page;
