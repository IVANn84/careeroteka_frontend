import withStyle from 'react-jss';
import { observer } from 'mobx-react-lite';

import SalaryChart from './SalaryChart.jsx';

const style = {
  container: {
    padding: [0, 15],
    marginBottom: 36,
  },
  chart: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(30px, 1fr))',
    gap: '4px',
    alignItems: 'flex-end',
    margin: [0, 50],
  },
  slider: {
    margin: [0, 50],
  },
};

export default withStyle(style)(observer(SalaryChart));
