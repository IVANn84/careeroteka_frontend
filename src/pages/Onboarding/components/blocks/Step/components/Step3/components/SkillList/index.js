import withStyle from 'react-jss';
import { memo } from 'react';
import { observer } from 'mobx-react-lite';

import SkillList from './SkillList.jsx';

const style = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '12px',
  },
};

export default memo(withStyle(style)(observer(SkillList)));
