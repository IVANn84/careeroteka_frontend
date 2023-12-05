import React from 'react';
import hh from 'Image/hh.png';
import habr from 'Image/habr.png';

import Typography from 'Component/Typography';
import Block from 'Component/Block';

export default function Response({
  classes,
}) {
  // const {
  //   entityStore,
  // } = useStoreVacancyPage();

  return (
    <Block
      className={classes.container}
      padding={[[36, 24]]}
    >
      <Typography
        component="h3"
        variant="H3"
        variantMobile="H3"
      >
        Отклик
      </Typography>
      <Typography
        component="p"
        variant="B1"
        variantMobile="B1"
        weight="semiBold"
        weightMobile="semiBold"
      >
        Смотрите эти вакансии на:
      </Typography>
      <ul>
        <li className={classes.item}>
          <img alt="habr" src={habr} />
          <Typography
            component="p"
            variant="B1"
            variantMobile="B1"
          >
            Хабр карьера
          </Typography>
        </li>
        <li className={classes.item}>
          <img alt="habr" src={hh} />
          <Typography
            component="p"
            variant="B1"
            variantMobile="B1"
          >
            hh.ru
          </Typography>
        </li>
        <li className={classes.item}>
          <img alt="habr" src={habr} />
          <Typography
            component="p"
            variant="B1"
            variantMobile="B1"
          >
            Хабр карьера
          </Typography>
        </li>
        <li className={classes.item}>
          <img alt="habr" src={hh} />
          <Typography
            component="p"
            variant="B1"
            variantMobile="B1"
          >
            hh.ru
          </Typography>
        </li>
      </ul>
      {/* <Button
        isDisabled={entityStore.isLoading}
        onClick={() => window.open(entityStore.entity?.link, '_blank')}
      >
        Перейти к вакансии
      </Button> */}
    </Block>
  );
}
