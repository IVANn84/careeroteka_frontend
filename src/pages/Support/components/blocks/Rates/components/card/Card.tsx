import React from 'react';

import Typography from 'Component/Typography';

interface CardProps {
  classes: { [key: string]: string };
  name: string;
  description: string;
  salary: string;
}

export default function Card({
  classes,
  name,
  description,
  salary,
} : CardProps) {
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <div className={classes.icon} />
        <Typography
          component="p"
          variant="C1"
          variantMobile="C1"
        >
          {name}
        </Typography>
      </div>
      <Typography
        className={classes.description}
        component="p"
        variant="C1"
        variantMobile="C1"
      >
        {description}
      </Typography>
      <Typography
        className={classes.salary}
        component="p"
        variant="C1"
        variantMobile="C1"
      >
        {salary}
      </Typography>
    </div>
  );
}
