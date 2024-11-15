import withStyle from 'react-jss';
import { observer } from 'mobx-react-lite';

import SalaryChart from './SalaryChart';

const style = {
  container: {
    padding: [0, 15],
    marginBottom: 36,
  },
  chart: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(20px, 5.77%))',
    gap: '4px',
    alignItems: 'flex-end',
    margin: [0, 50],
  },
  slider: {
    margin: [0, 50],
  },

  '@media screen and (max-device-width: 660px)': {
    chart: {
      gridTemplateColumns: 'repeat(auto-fit, minmax(10px, 1fr))',
    },
  },
};

export default withStyle(style)(observer(SalaryChart));
