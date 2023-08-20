import withStyle from 'react-jss';
import { observer } from 'mobx-react-lite';
import { memo } from 'react';

import Main from './Main.jsx';

const style = {
  name: {
    margin: [20, 0],
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
