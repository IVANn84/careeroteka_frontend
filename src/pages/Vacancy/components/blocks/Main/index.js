import withStyle from 'react-jss';
import { memo } from 'react';
import { observer } from 'mobx-react-lite';

import Main from './Main.jsx';

const style = {
  name: {
    marginTop: 16,
    marginBottom: 20,
  },
  salary: {
    marginBottom: 32,
  },
  tags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '17px',
  },

  '@media screen and (max-device-width: 576px)': {
    name: {
      marginTop: 12,
      marginBottom: 16,
    },
    salary: {
      marginBottom: 18,
    },
  },
};

export default memo(withStyle(style)(observer(Main)));
