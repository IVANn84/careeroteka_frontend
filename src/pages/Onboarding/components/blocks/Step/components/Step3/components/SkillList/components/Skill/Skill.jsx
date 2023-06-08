/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

import Typography from 'Component/Typography';

export default function Skill({
  skillName,

  removeSkill,
  onSelect,

  classes,
}) {
  return (
    <div
      className={classes.container}
      onClick={onSelect}
    >
      <Typography
        className={classes.title}
        variant="B1"
        variantMobile="B2"
      >
        {skillName}
      </Typography>
      {removeSkill && (
        <XMarkIcon
          className={classes.removeButton}
          width={25}
          height={25}
          onClick={removeSkill}
        />
      )}
    </div>
  );
}
