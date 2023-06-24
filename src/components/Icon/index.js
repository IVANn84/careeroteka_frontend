import PropTypes from 'prop-types';

import Icon from './Icon.jsx';

Icon.propTypes = {
  name: PropTypes.oneOf([
    'vk',
    'telegram',
    'searchPeopleInside',
    'companyHouse',
    'rocket',
    'techScience',
    'freelance',
    'remote',
    'cookie',
    'worldBag',
    'graduate',
  ]),
  size: PropTypes.number,
};

Icon.defaultProps = {
  width: 24,
  height: 24,
};

export default Icon;
