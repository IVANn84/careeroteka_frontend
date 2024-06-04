import React from 'react';

import Typography from 'Component/Typography';
import Button from 'Component/Button';

export default function Request({ classes }) {
  return (
    <section className={classes.container}>
      <Typography className={classes.title} component="h2" variant="H2" variantMobile="H2">
        Оставьте заявку и мы свяжемся с вами в
        {' '}
        <span className={classes.highlight}>ближайшее</span>
        {' '}
        время
      </Typography>
      <Typography
        className={classes.description}
        component="p"
        variant="B1"
        variantMobile="B1"
      >
        Мы&nbsp;используем все возможные технологии,
        чтобы находить уникальные вакансии, чтобы кандидат быстрее находил работу мечты
      </Typography>
      <Button
        variant="filled"
      >
        Попробовать сейчас
      </Button>
    </section>
  );
}
