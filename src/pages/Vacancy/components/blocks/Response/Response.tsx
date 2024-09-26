import React from 'react';
import hh from 'Image/hh.png';
// import habr from 'Image/habr.png';

import { useStoreVacancyPage } from 'Page/Vacancy/stores';
import { useDevice } from 'Hook/useDevice';
import Typography from 'Component/Typography';
import Block from 'Component/Block';

export default function Response({ classes }) {
  const device = useDevice();
  const { entityStore } = useStoreVacancyPage();

  return (
    <Block
      borderRadiusMobile={24}
      className={classes.container}
      padding={[[36, 24]]}
      paddingMobile={[[24, 16]]}
    >
      <Typography component="h3" variant="H3" variantMobile="H5">
        Отклик
      </Typography>
      <Typography
        component="p"
        variant="B1"
        variantMobile="B2"
        weight="semiBold"
        weightMobile="semiBold"
      >
        Смотрите эту вакансию на:
      </Typography>
      <ul className={classes.list}>
        {/* <li className={classes.item}>
          <img alt="habr" src={habr} />
          {['desktop', 'tablet'].includes(device) && (
          <Typography
            component="p"
            variant="B1"
            variantMobile="B1"
          >
            Хабр карьера
          </Typography>
          )}
        </li> */}
        <a href={entityStore.entity.link} rel="noreferrer" target="_blank">
          <li className={classes.item}>
            <img alt="hh" src={hh} />
            {['desktop', 'tablet'].includes(device) && (
              <Typography component="p" variant="B1" variantMobile="B1">
                hh.ru
              </Typography>
            )}
          </li>
        </a>
        {/* <li className={classes.item}>
          <img alt="habr" src={habr} />
          {['desktop', 'tablet'].includes(device) && (
          <Typography
            component="p"
            variant="B1"
            variantMobile="B1"
          >
            Хабр карьера
          </Typography>
          )}
        </li>
        <li className={classes.item}>
          <img alt="habr" src={hh} />
          {['desktop', 'tablet'].includes(device) && (
          <Typography
            component="p"
            variant="B1"
            variantMobile="B1"
          >
            hh.ru
          </Typography>
          )}
        </li> */}
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
