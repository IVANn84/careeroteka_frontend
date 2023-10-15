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
        className={classes.title}
        component="p"
        variant="H4"
        variantMobile="H4"
      >
        Характеристики
      </Typography>
      <Typography
        className={classes.description}
        component="p"
        variant="B1"
        variantMobile="B2"
      >
        Дополнительные факторы для выбора работы
      </Typography>
      <div className={classes.container}>
        <div className={classes.variants}>
          <Checkbox
            isSelected={fieldsStore.characteristics.includes(1)}
            onClick={() => fieldsStore.setCharacteristics(1)}
            title={(
              <span className={classes.checkboxDescription}>
                <p>Предложения с релокацией</p>
                Разделите оплату, чтобы не платить всю сумму сразу
              </span>
            )}
          />
          <Checkbox
            isSelected={fieldsStore.characteristics.includes(2)}
            onClick={() => fieldsStore.setCharacteristics(2)}
            title={(
              <span className={classes.checkboxDescription}>
                <p>Предложения с тестовым</p>
                Можно снизить стоимость обучения за счёт государства
              </span>
            )}
          />
        </div>
        <div className={classes.variants}>
          <Checkbox
            isSelected={fieldsStore.characteristics.includes(3)}
            onClick={() => fieldsStore.setCharacteristics(3)}
            title={(
              <span className={classes.checkboxDescription}>
                <p>Предложения без оплаты</p>
                Можно снизить стоимость обучения за счёт государства
              </span>
            )}
          />
          <Checkbox
            isSelected={fieldsStore.characteristics.includes(4)}
            onClick={() => fieldsStore.setCharacteristics(4)}
            title={(
              <span className={classes.checkboxDescription}>
                <p>Наличие ДМС</p>
                Медицинское страхование, которое покрывает расходы на здоровье
              </span>
            )}
          />
        </div>
      </div>
      <Divider />
    </>
  );
}
