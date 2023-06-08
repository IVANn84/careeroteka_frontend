import withStyle from 'react-jss';
import { memo } from 'react';

import Skill from './Skill.jsx';

const style = ({ font }) => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    minWidth: 200,
    borderRadius: 8,
    padding: ({ removeSkill }) => 12 + !!removeSkill,
    cursor: ({ removeSkill }) => !removeSkill && 'pointer',
    border: ({ removeSkill }) => !removeSkill && [[1, 'solid', font.color.regular]],
    background: ({ removeSkill }) => removeSkill && font.color.alternative,
    color: ({ removeSkill }) => removeSkill && font.color.light,
  },
  title: {
    wordBreak: 'break-word',
  },
  removeButton: {
    cursor: 'pointer',
  },
});

export default memo(withStyle(style)(Skill));
