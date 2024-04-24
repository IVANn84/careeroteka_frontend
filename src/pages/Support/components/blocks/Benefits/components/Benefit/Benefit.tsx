import { Link } from 'react-router-dom';
import React from 'react';

import Typography from 'Component/Typography';

export default function Benefit({
  classes, title, description, image,
}) {
  return (
    <div className={classes.container}>
      <img alt="" className={classes.image} src={image} />
      <div>
        <Typography
          className={classes.title}
          component="h3"
          variant="H3"
          variantMobile="H3"
        >
          {title}
        </Typography>
        <Typography
          className={classes.description}
          component="p"
          variant="B1"
          variantMobile="B1"
        >
          {description}
        </Typography>
        <Link className={classes.link} to="/">
          <Typography variant="B1" variantMobile="B1">
            Посмотреть пример →
          </Typography>
        </Link>
      </div>
    </div>
  );
}
