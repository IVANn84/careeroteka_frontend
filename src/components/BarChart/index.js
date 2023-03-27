import {memo} from 'react';
import PropTypes from 'prop-types';

import BarChart from './BarChart.jsx';

const Component = memo(BarChart);

Component.propTypes = {
    data: PropTypes.node,
    options: PropTypes.object,
    yMin: PropTypes.number,
};

export default Component;