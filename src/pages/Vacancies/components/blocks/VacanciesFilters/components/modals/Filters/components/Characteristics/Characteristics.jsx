import React from 'react';

import { useStoreVacanciesPage } from 'Page/Vacancies/stores';

import Typography from 'Component/Typography';
import Divider from 'Component/Divider';
import Checkbox from 'Component/Checkbox';

export default function Characteristics({
  classes,
}) {
  const {
    filtersModalStore: {
      fieldsStore,
    },
  } = useStoreVacanciesPage();

  return (
    <>
      <Typography
        variant="H4"
        variantMobile="H4"
        component="p"
        className={classes.title}
      >
        Характеристики
      </Typography>
      <Typography
        variant="B1"
        variantMobile="B2"
        component="p"
        className={classes.description}
      >
        Дополнительные факторы для выбора работы
      </Typography>
      <div className={classes.container}>
        <div className={classes.variants}>
          <Checkbox
            title={(
              <span className={classes.checkboxDescription}>
                <p>Предложения с релокацией</p>
                Разделите оплату, чтобы не платить всю сумму сразу
              </span>
            )}
            isSelected={fieldsStore.characteristics.includes(1)}
            onClick={() => fieldsStore.setCharacteristics(1)}
          />
          <Checkbox
            title={(
              <span className={classes.checkboxDescription}>
                <p>Предложения с тестовым</p>
                Можно снизить стоимость обучения за счёт государства
              </span>
            )}
            isSelected={fieldsStore.characteristics.includes(2)}
            onClick={() => fieldsStore.setCharacteristics(2)}
          />
        </div>
        <div className={classes.variants}>
          <Checkbox
            title={(
              <span className={classes.checkboxDescription}>
                <p>Предложения без оплаты</p>
                Можно снизить стоимость обучения за счёт государства
              </span>
            )}
            isSelected={fieldsStore.characteristics.includes(3)}
            onClick={() => fieldsStore.setCharacteristics(3)}
          />
          <Checkbox
            title={(
              <span className={classes.checkboxDescription}>
                <p>Наличие ДМС</p>
                Медицинское страхование, которое покрывает расходы на здоровье
              </span>
            )}
            isSelected={fieldsStore.characteristics.includes(4)}
            onClick={() => fieldsStore.setCharacteristics(4)}
          />
        </div>
      </div>
      <Divider />
    </>
  );
}
