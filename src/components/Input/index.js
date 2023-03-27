import {memo} from 'react';
import PropTypes from 'prop-types';

import Input from './Input.jsx';

const Component = memo(Input);

Component.propTypes = {
    props: PropTypes.object,
};

export default Component;