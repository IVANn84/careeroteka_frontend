import React from 'react';

import Typography from 'Component/Typography';
import Button from 'Component/Button';

export default function Rates({ classes }) {
  return (
    <section className={classes.container}>
      <Typography className={classes.title} component="h2" variant="H2" variantMobile="H2">
        <span className={classes.highlight}>Тарифы</span>
        {' '}
        работы
      </Typography>
      <div className={classes.lists}>
        <div className={classes.card}>
          <div className={classes.icon} />
          <Typography
            component="p"
            variant="B1"
            variantMobile="B1"
            weight="semiBold"
          >
            Подготовка к поиску
          </Typography>
          <Typography
            className={classes.card_description}
            component="p"
            variant="B2"
            variantMobile="B2"
          >
            Мы соберём всю информацию
            о компании  и продукте за вас
          </Typography>
          <Typography
            component="p"
            variant="H5"
            variantMobile="H5"
          >
            7 000 ₽
            {' '}
            <Typography
              component="span"
              variant="B2"
              variantMobile="B2"
              weight="regular"
            >
              / мес.
            </Typography>
          </Typography>
          <Button
            className={classes.card_button}
            variant="outlined"
          >
            Оставить заявку
          </Button>
          <Typography
            component="p"
            variant="B2"
            variantMobile="B2"
            weight="medium"
          >
            Что входит в тариф:
          </Typography>
          <ul className={classes.card_list}>
            <li>Создание резюме</li>
            <li>Создание резюме</li>
            <li>Создание резюме</li>
            <li>Создание резюме</li>
          </ul>
        </div>
        <div className={classes.card}>
          <div className={classes.icon} />
          <Typography
            component="p"
            variant="B1"
            variantMobile="B1"
            weight="semiBold"
          >
            Сопровождение
          </Typography>
          <Typography
            className={classes.card_description}
            component="p"
            variant="B2"
            variantMobile="B2"
          >
            Мы соберём всю информацию
            о компании  и продукте за вас
          </Typography>
          <Typography
            component="p"
            variant="H5"
            variantMobile="H5"
          >
            15 000 ₽
            {' '}
            <Typography
              component="span"
              variant="B2"
              variantMobile="B2"
              weight="regular"
            >
              / мес.
            </Typography>
          </Typography>
          <Button
            className={classes.card_button}
            variant="outlined"
          >
            Оставить заявку
          </Button>
          <Typography
            component="p"
            variant="B2"
            variantMobile="B2"
            weight="medium"
          >
            Что входит в тариф:
          </Typography>
          <ul className={classes.card_list}>
            <li>Создание резюме</li>
            <li>Создание резюме</li>
            <li>Создание резюме</li>
            <li>Создание резюме</li>
            <li>Создание резюме</li>
            <li>Создание резюме</li>
            <li>Создание резюме</li>
          </ul>
        </div>
        <div className={classes.card}>
          <div className={classes.icon} />
          <Typography
            component="p"
            variant="B1"
            variantMobile="B1"
            weight="semiBold"
          >
            Только для випоФФ
          </Typography>
          <Typography
            className={classes.card_description}
            component="p"
            variant="B2"
            variantMobile="B2"
          >
            Мы соберём всю информацию
            о компании  и продукте за вас
          </Typography>
          <Typography
            component="p"
            variant="H5"
            variantMobile="H5"
          >
            60 000 ₽
            {' '}
            <Typography
              component="span"
              variant="B2"
              variantMobile="B2"
              weight="regular"
            >
              / мес.
            </Typography>
          </Typography>
          <Button
            className={classes.card_button}
            variant="outlined"
          >
            Оставить заявку
          </Button>
          <Typography
            component="p"
            variant="B2"
            variantMobile="B2"
            weight="medium"
          >
            Что входит в тариф:
          </Typography>
          <ul className={classes.card_list}>
            <li>Создание резюме</li>
            <li>Создание резюме</li>
            <li>Создание резюме</li>
            <li>Создание резюме</li>
            <li>Создание резюме</li>
            <li>Создание резюме</li>
            <li>Создание резюме</li>
            <li>Создание резюме</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
