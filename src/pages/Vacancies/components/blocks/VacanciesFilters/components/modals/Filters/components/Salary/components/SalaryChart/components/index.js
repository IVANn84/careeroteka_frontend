import withStyle from 'react-jss';
import PropTypes from 'prop-types';

import Column from './Column.jsx';

const style = ({ salaryChart, font }) => ({
  bar: {
    backgroundColor: salaryChart.bar.backgroundColor,
    borderRadius: salaryChart.bar.borderRadius,
    position: 'relative',

    '&:hover': {
      backgroundColor: `${salaryChart.bar.backgroundColorHover} !important`,

      '& $label': {
        display: 'block',
      },
    },
  },

  label: {
    display: 'none',
    position: 'absolute',
    top: -22,
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: [8, 10],
    whiteSpace: 'nowrap',
    zIndex: 10,
    color: salaryChart.datalabels.color,
    boxShadow: salaryChart.datalabels.boxShadow,
    backgroundColor: salaryChart.datalabels.backgroundColor,
    borderRadius: salaryChart.datalabels.borderRadius,
  },

  count: {
    color: font.color.alternative,
    fontWeight: 700,
  },
});

const Component = withStyle(style)(Column);

Component.propTypes = {
  count: PropTypes.number,
  salary: PropTypes.number,
  minValue: PropTypes.number,
  maxValue: PropTypes.number,
};

export default Component;
