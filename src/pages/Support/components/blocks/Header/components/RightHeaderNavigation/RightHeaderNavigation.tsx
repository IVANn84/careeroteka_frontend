import { Link } from 'react-router-dom';
import React from 'react';

import { useDevice } from 'Hook/useDevice';
import Typography from 'Component/Typography';

export default function RightHeaderNavigation({ classes }) {
  const device = useDevice();

  return (
    <div className={classes.container}>
      { device === 'desktop' && (
      <>
        <Link to="/vacancies">
          <Typography variant="B1" variantMobile="B2">
            Вакансии
          </Typography>
        </Link>
        <Link to="/">
          <Typography variant="B1" variantMobile="B2">
            Вики карьеры
          </Typography>
        </Link>
      </>
      )}
      <Link to="/login">
        <Typography variant="B1" variantMobile="B2">
          Войти
        </Typography>
      </Link>
    </div>
  );
}
