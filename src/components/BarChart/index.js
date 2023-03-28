import {memo} from 'react';
import PropTypes from 'prop-types';

import BarChart from './BarChart.jsx';

// Столбчатый график
const Component = memo(BarChart);

Component.propTypes = {
    // https://www.chartjs.org/docs/latest/general/data-structures.html
    data: PropTypes.object.isRequired,
    options: PropTypes.object,
    yMin: PropTypes.number,
};

export default Component;