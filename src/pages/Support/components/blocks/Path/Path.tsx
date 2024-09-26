import React from 'react';

import { useDevice } from 'Hook/useDevice';
import Typography from 'Component/Typography';

import Card from './components/card';
import Accordion from './components/accordion';

const cards = Array(4).fill({
  name: 'Яндекс Практикум',
  description: 'Продуктовый дизайнер в команду курсов по дизайну',
  salary: 'от 200 000 ₽',
});

const items = [
  {
    title: 'Отклики',
    content: cards,
  },
  {
    title: 'Тестовое задание',
    content: cards,
  },
  {
    title: 'Собеседование',
    content: cards,
  },
  {
    title: 'Оффер',
    content: cards,
  },
];

export default function Path({ classes }) {
  const device = useDevice();

  return (
    <section className={classes.container}>
      <Typography
        className={classes.title}
        component="h2"
        variant="H2"
        variantMobile="H3"
      >
        Так может выглядеть путь до
        <span className={classes.highlight}>&nbsp;оффера мечты</span>
      </Typography>
      {['desktop', 'tablet'].includes(device) && (
        <Typography
          className={classes.description}
          component="p"
          variant="B1"
          variantMobile="B1"
        >
          Тут будет текст Тут будет текст Тут будет текст Тут будет текст Тут
          будет текст Тут будет текст Тут будет текст Тут будет текст
        </Typography>
      )}
      {['desktop', 'tablet'].includes(device) ? (
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
      ) : (
        <Accordion items={items} />
      )}
    </section>
  );
}
