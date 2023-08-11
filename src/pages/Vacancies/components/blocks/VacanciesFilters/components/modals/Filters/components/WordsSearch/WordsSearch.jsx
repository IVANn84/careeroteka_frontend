import React from 'react';

import { useStoreVacanciesPage } from 'Page/Vacancies/stores';

import Typography from 'Component/Typography';
import Divider from 'Component/Divider';
import Input from 'Component/Input';
import Checkbox from 'Component/Checkbox';

export default function WordsSearch({
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
        Поиск по словам
      </Typography>
      <div className={classes.container}>
        <div>
          <Typography
            variant="B1"
            variantMobile="B2"
            component="p"
            className={classes.descriptionInput}
          >
            Найти предложения со словами:
          </Typography>
          <Input
            type="text"
            placeholder="Веб-дизайн, интерфейсы"
            isClearable
            value={fieldsStore.searchWords}
            onChange={fieldsStore.setSearchWords}
          />
          <Typography
            variant="B1"
            variantMobile="B2"
            weight="semiBold"
            weightMobile="semiBold"
            component="p"
            className={classes.descriptionAt}
          >
            Искать только:
          </Typography>
          <div className={classes.variants}>
            <Checkbox
              title="В названии предложения"
              isSelected={fieldsStore.searchAt.includes(1)}
              onClick={() => fieldsStore.setSearchAt(1)}
            />
            <Checkbox
              title="В описании предложения"
              isSelected={fieldsStore.searchAt.includes(2)}
              onClick={() => fieldsStore.setSearchAt(2)}
            />
            <Checkbox
              title="В названии компании"
              isSelected={fieldsStore.searchAt.includes(3)}
              onClick={() => fieldsStore.setSearchAt(3)}
            />
          </div>
        </div>
        <div>
          <Typography
            variant="B1"
            variantMobile="B2"
            component="p"
            className={classes.descriptionInput}
          >
            Исключить предложения со словами:
          </Typography>
          <Input
            type="text"
            placeholder="Веб-дизайн, интерфейсы"
            isClearable
            value={fieldsStore.excludeWords}
            onChange={fieldsStore.setExcludeWords}
          />
          <Typography
            variant="B1"
            variantMobile="B2"
            weight="semiBold"
            weightMobile="semiBold"
            component="p"
            className={classes.descriptionAt}
          >
            Исключить только:
          </Typography>
          <div className={classes.variants}>
            <Checkbox
              title="В названии предложения"
              isSelected={fieldsStore.excludeAt.includes(1)}
              onClick={() => fieldsStore.setExcludeAt(1)}
            />
            <Checkbox
              title="В описании предложения"
              isSelected={fieldsStore.excludeAt.includes(2)}
              onClick={() => fieldsStore.setExcludeAt(2)}
            />
            <Checkbox
              title="В названии компании"
              isSelected={fieldsStore.excludeAt.includes(3)}
              onClick={() => fieldsStore.setExcludeAt(3)}
            />
          </div>
        </div>
      </div>
      <Divider />
    </>
  );
}
