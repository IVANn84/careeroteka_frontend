import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

import { onEnter } from 'Util/onEnter';
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
      onKeyDown={onEnter(onSelect)}
      role="button"
      tabIndex={0}
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
          onKeyDown={onEnter(removeSkill)}
          tabIndex={0}
          width={25}
        />
      )}
    </div>
  );
}
