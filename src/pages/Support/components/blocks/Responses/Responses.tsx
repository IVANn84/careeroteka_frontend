import { Link } from 'react-router-dom';
import React from 'react';
import ya from 'Image/landing/ya.png';
import superdao from 'Image/landing/superdao.png';
import sber from 'Image/landing/sber.png';
import osome from 'Image/landing/osome.png';

import Typography from 'Component/Typography';

const iconsMap = [
  {
    name: 'Яндекс',
    icon: ya,
  },
  {
    name: 'Superdao',
    icon: superdao,
  },
  {
    name: 'Яндекс',
    icon: ya,
  },
  {
    name: 'Сбер',
    icon: sber,
  },
  {
    name: 'Superdao',
    icon: superdao,
  },
  {
    name: 'Osome',
    icon: osome,
  },
];

export default function Responses({ classes }) {
  return (
    <section className={classes.container}>
      <Typography component="h2" variant="H2" variantMobile="H3">
        Делаем
        {' '}
        <span className={classes.highlight}>сотни</span>
        {' '}
        откликов каждый
        день
      </Typography>
      <Typography
        className={classes.description}
        component="p"
        variant="B1"
        variantMobile="B2"
      >
        Мы&nbsp;используем все возможные технологии, чтобы находить уникальные
        вакансии, чтобы&nbsp;кандидат быстрее находил работу мечты
      </Typography>
      <Link
        className={classes.link}
        to="/vacancies"
      >
        <Typography variant="B1" variantMobile="B2">
          Посмотреть истории трудоустройств →
        </Typography>
      </Link>
      <div className={classes.iconsContainer}>
        {iconsMap.map(({ name, icon }, index) => (
          <div className={classes.icon} key={index}>
            <img alt={name} src={icon} />
            <Typography variant="B1" variantMobile="C1" weight="semiBold">
              {name}
            </Typography>
          </div>
        ))}
      </div>
    </section>
  );
}
