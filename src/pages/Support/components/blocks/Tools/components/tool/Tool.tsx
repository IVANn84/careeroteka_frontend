import React from 'react';

import Typography from 'Component/Typography';

interface ToolProps {
  classes: { [key: string]: string };
  name: string;
  description: string;
  image: string;
}

export default function Tool({
  classes,
  name,
  description,
  image,
} : ToolProps) {
  return (
    <div className={classes.container}>
      <img alt={name} src={image} />
      <div className={classes.info}>
        <Typography
          className={classes.title}
          component="p"
          variant="B2"
          variantMobile="B1"
          weight="semiBold"
        >
          {name}
        </Typography>
        <Typography
          className={classes.description}
          component="p"
          variant="C1"
          variantMobile="C1"
        >
          {description}
        </Typography>
      </div>
    </div>
  );
}
