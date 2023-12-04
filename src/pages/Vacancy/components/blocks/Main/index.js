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
};

export default memo(withStyle(style)(observer(Main)));
