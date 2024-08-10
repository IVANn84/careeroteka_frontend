import React from 'react';

import Typography from 'Component/Typography';

interface AssistantProps {
  classes: { [key: string]: string };
  name: string;
  description: string;
  image: string;
}

export default function Assistant({
  classes,
  name,
  description,
  image,
} : AssistantProps) {
  return (
    <div className={classes.container}>
      <img alt={name} src={image} />
      <Typography
        className={classes.title}
        component="p"
        variant="B1"
        variantMobile="B2"
        weight="semiBold"
      >
        {name}
      </Typography>
      <Typography
        className={classes.description}
        component="p"
        variant="B2"
        variantMobile="B2"
      >
        {description}
      </Typography>
    </div>
  );
}
