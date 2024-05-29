import React from 'react';

import Typography from 'Component/Typography';

import Card from './components/card';

const cards = Array(4).fill({
  name: 'Яндекс Практикум',
  description: 'Продуктовый дизайнер в команду курсов по дизайну',
  salary: 'от 200 000 ₽',
});

export default function Path({ classes }) {
  return (
    <section className={classes.container}>
      <Typography className={classes.title} component="h2" variant="H2" variantMobile="H2">
        Так может выглядеть путь до
        {' '}
        <span className={classes.highlight}>оффера мечты</span>
        {' '}
      </Typography>
      <Typography
        className={classes.description}
        component="p"
        variant="B1"
        variantMobile="B1"
      >
        Тут будет текст Тут будет текст Тут будет текст Тут будет текст Тут будет текст
        Тут будет текст Тут будет текст Тут будет текст
      </Typography>
      <div className={classes.lists}>
        <div className={classes.list}>
          <Typography
            component="p"
            variant="B2"
            variantMobile="B2"
            weight="semiBold"
          >
            Отклики
            {' '}
            <span className={classes.highlight_wrapper}>&#183; 3</span>
          </Typography>
          <div className={classes.cards}>
            {cards.map(card => (
              <Card key={card.name} {...card} />
            ))}
          </div>
        </div>
        <div className={classes.list}>
          <Typography
            component="p"
            variant="B2"
            variantMobile="B2"
            weight="semiBold"
          >
            Тестовое задание
            {' '}
            <span className={classes.highlight_wrapper}>&#183; 3</span>
          </Typography>
          <div className={classes.cards}>
            {cards.map(card => (
              <Card key={card.name} {...card} />
            ))}
          </div>
        </div>
        <div className={classes.list}>
          <Typography
            component="p"
            variant="B2"
            variantMobile="B2"
            weight="semiBold"
          >
            Собеседование
            {' '}
            <span className={classes.highlight_wrapper}>&#183; 3</span>
          </Typography>
          <div className={classes.cards}>
            {cards.map(card => (
              <Card key={card.name} {...card} />
            ))}
          </div>
        </div>
        <div className={classes.list}>
          <Typography
            component="p"
            variant="B2"
            variantMobile="B2"
            weight="semiBold"
          >
            Оффер
            {' '}
            <span className={classes.highlight_wrapper}>&#183; 3</span>
          </Typography>
          <div className={classes.cards}>
            {cards.map(card => (
              <Card key={card.name} {...card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
