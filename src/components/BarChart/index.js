import {memo} from 'react';
import PropTypes from 'prop-types';

import BarChart from './BarChart.jsx';

const Component = memo(BarChart);

Component.propTypes = {
    // https://www.chartjs.org/docs/latest/general/data-structures.html
    data: PropTypes.object,
    options: PropTypes.object,
    yMin: PropTypes.number,
};

export default Component;