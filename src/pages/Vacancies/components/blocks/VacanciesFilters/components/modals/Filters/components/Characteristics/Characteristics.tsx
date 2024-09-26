import React from 'react';

import { useStoreVacanciesPage } from 'Page/Vacancies/stores';
import { useDevice } from 'Hook/useDevice';
import Typography from 'Component/Typography';
import Checkbox from 'Component/Checkbox';

export default function Characteristics({ classes }) {
  const {
    filtersModalStore: {
      fieldsStore,
      fieldsStore: { filters },
    },
  } = useStoreVacanciesPage();
  const device = useDevice();

  return (
    <>
      <Typography
        className={classes.title}
        component="p"
        variant="H5"
        variantMobile="B1"
        weightMobile="semiBold"
      >
        {['desktop', 'tablet'].includes(device) ? 'Прочее' : 'Характеристики'}
      </Typography>
      {['desktop', 'tablet'].includes(device) && (
        <Typography
          className={classes.description}
          component="p"
          variant="B1"
          variantMobile="B2"
        >
          Дополнительные факторы для выбора работы
        </Typography>
      )}
      <div className={classes.container}>
        <div className={classes.variants}>
          <Checkbox
            isSelected={filters.isRelocationRequired}
            onClick={fieldsStore.toggleIsRelocationRequired}
            title={(
              <span className={classes.checkboxDescription}>
                <p>Предложения с релокацией</p>
                Разделите оплату, чтобы не платить всю сумму сразу
              </span>
            )}
          />
          {/* <Checkbox */}
          {/*  isSelected={fieldsStore.} */}
          {/*  onClick={fieldsStore.} */}
          {/*  title={( */}
          {/*    <span className={classes.checkboxDescription}> */}
          {/*      <p>Предложения с тестовым</p> */}
          {/*      Можно снизить стоимость обучения за счёт государства */}
          {/*    </span> */}
          {/*  )} */}
          {/* /> */}
        </div>
        <div className={classes.variants}>
          {/* <Checkbox */}
          {/*  isSelected={fieldsStore.} */}
          {/*  onClick={fieldsStore.} */}
          {/*  title={( */}
          {/*    <span className={classes.checkboxDescription}> */}
          {/*      <p>Предложения без оплаты</p> */}
          {/*      Можно снизить стоимость обучения за счёт государства */}
          {/*    </span> */}
          {/*  )} */}
          {/* /> */}
          <Checkbox
            isSelected={filters.hasInsurance}
            onClick={fieldsStore.toggleHasInsurance}
            title={(
              <span className={classes.checkboxDescription}>
                <p>Наличие ДМС</p>
                Медицинское страхование, которое покрывает расходы на здоровье
              </span>
            )}
          />
        </div>
      </div>
    </>
  );
}
