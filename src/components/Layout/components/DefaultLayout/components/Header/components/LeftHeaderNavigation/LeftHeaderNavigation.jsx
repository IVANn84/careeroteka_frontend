import React from 'react';
import { NavLink } from 'react-router-dom';

import Typography from 'Component/Typography';

export default function LeftHeaderNavigation({
  classes,
}) {
  return (
    <div className={classes.container}>
      <NavLink to="/vacancies">
        <Typography
          variant="B1"
          variantMobile="B2"
        >
          Вакансии
        </Typography>
      </NavLink>
    </div>
  );
}
