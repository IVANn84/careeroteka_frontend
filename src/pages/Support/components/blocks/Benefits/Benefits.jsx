import React from 'react';
import image from 'Image/landing/first.png';

import Typography from 'Component/Typography';

import Benefit from './components/Benefit';

const benefits = [
  {
    title: 'Профиль',
    image,
    description: 'На личном звонке карьерный консультант соберёт ожидания по зарплате, графику и другие важные условия, и расскажет, что сейчас может предложить рынок.',
    color: '#367CF3',
  },
  {
    title: 'Резюме',
    image,
    description: 'Мы скорректируем ваше резюме или CV, опираясь на современные реалии рынка и подскажем как улучшить портфолио.',
    color: '#DD657B',
  },
  {
    title: 'Отклики',
    image,
    description: 'Мы покажем самые классные и свежие предложения о работе со всех площадок рынка — откликайтесь сами или мы сделаем это за вас.',
    color: '#DF804D',
  },
  {
    title: 'Контакт с HR',
    image,
    description: 'Мы соберём всю информацию о компании  и продукте, найдем свободные слоты в расписании и назначим встречу. Вам нужно только пройти собеседования.',
    color: '#D60C31',
  },
];

export default function Benefits({ classes }) {
  return (
    <section className={classes.container}>
      <Typography className={classes.title} component="h2" variant="H2" variantMobile="H2">
        Наконец, больше
        {' '}
        <span className={classes.highlight}>не нужно</span>
        {' '}
        самому искать работу
      </Typography>
      {benefits.map(benefit => (
        <Benefit key={benefit.title} {...benefit} />
      ))}
    </section>
  );
}
