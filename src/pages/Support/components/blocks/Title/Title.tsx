import React from 'react';

import Typography from 'Component/Typography';
import Button from 'Component/Button';

export default function Title({ classes }) {
  return (
    <section className={classes.header}>
      <Typography className={classes.title} component="h1" variant="H1Lending" variantMobile="H1">
        Мы&nbsp;работаем с&nbsp;резюме, откликами и HRами
        {' '}
        <span className={classes.highlight}>за&nbsp;вас</span>
      </Typography>
      <Typography className={classes.description} component="p" variant="B1" variantMobile="B2">
        В&nbsp;Careeroteka мы&nbsp;забираем самую сложную часть поиска работы
        на&nbsp;себя Вы&nbsp;&mdash; ходите на&nbsp;собеседования&nbsp;&mdash;
        мы&nbsp;делаем всё остальное
      </Typography>
      <Button
        variant="filled"
      >
        Оставить заявку
      </Button>
    </section>
  );
}
