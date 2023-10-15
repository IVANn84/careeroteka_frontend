import withStyle from 'react-jss';
import { memo } from 'react';
import { observer } from 'mobx-react-lite';

import SalaryInRegion from './SalaryInRegion.jsx';

const style = ({ font }) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    marginBottom: 40,
    display: 'flex',
    justifyContent: 'space-between',
  },
  negative: {
    color: font.color.negative,
  },
  positive: {
    color: font.color.alternative,
  },

  '@media screen and (max-device-width: 576px)': {
    header: {
      marginBottom: 18,
    },
  },
});

export default memo(withStyle(style)(observer(SalaryInRegion)));
