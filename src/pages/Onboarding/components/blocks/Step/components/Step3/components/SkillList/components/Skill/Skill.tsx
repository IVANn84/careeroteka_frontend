/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

import Typography from 'Component/Typography';

interface Props {
  skillName: string;
  removeSkill?: () => void;
  onSelect?: () => void;
  classes: {[className: string]: string};
}

export default function Skill({
  skillName,

  removeSkill,
  onSelect,

  classes,
}: Props) {
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
          height={25}
          onClick={removeSkill}
          width={25}
        />
      )}
    </div>
  );
}
