import withStyle from 'react-jss';
import { observer } from 'mobx-react-lite';

import SalaryChart from './SalaryChart.jsx';

const style = {
  container: {
    padding: [0, 15],
    marginBottom: 36,
  },
  chart: {
    height: 200,
  },
  slider: {
    margin: [0, 50],
  },
};

export default withStyle(style)(observer(SalaryChart));
