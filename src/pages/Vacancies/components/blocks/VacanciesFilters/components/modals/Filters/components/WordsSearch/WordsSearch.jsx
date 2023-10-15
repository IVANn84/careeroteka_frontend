import React from 'react';

import { useStoreVacanciesPage } from 'Page/Vacancies/stores';
import Typography from 'Component/Typography';
import Input from 'Component/Input';
import Divider from 'Component/Divider';
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
        className={classes.title}
        component="p"
        variant="H4"
        variantMobile="H4"
      >
        Поиск по словам
      </Typography>
      <div className={classes.container}>
        <div>
          <Typography
            className={classes.descriptionInput}
            component="p"
            variant="B1"
            variantMobile="B2"
          >
            Найти предложения со словами:
          </Typography>
          <Input
            isClearable
            onChange={fieldsStore.setSearchWords}
            placeholder="Веб-дизайн, интерфейсы"
            type="text"
            value={fieldsStore.searchWords}
          />
          <Typography
            className={classes.descriptionAt}
            component="p"
            variant="B1"
            variantMobile="B2"
            weight="semiBold"
            weightMobile="semiBold"
          >
            Искать только:
          </Typography>
          <div className={classes.variants}>
            <Checkbox
              isSelected={fieldsStore.searchAt.includes(1)}
              onClick={() => fieldsStore.setSearchAt(1)}
              title="В названии предложения"
            />
            <Checkbox
              isSelected={fieldsStore.searchAt.includes(2)}
              onClick={() => fieldsStore.setSearchAt(2)}
              title="В описании предложения"
            />
            <Checkbox
              isSelected={fieldsStore.searchAt.includes(3)}
              onClick={() => fieldsStore.setSearchAt(3)}
              title="В названии компании"
            />
          </div>
        </div>
        <div>
          <Typography
            className={classes.descriptionInput}
            component="p"
            variant="B1"
            variantMobile="B2"
          >
            Исключить предложения со словами:
          </Typography>
          <Input
            isClearable
            onChange={fieldsStore.setExcludeWords}
            placeholder="Веб-дизайн, интерфейсы"
            type="text"
            value={fieldsStore.excludeWords}
          />
          <Typography
            className={classes.descriptionAt}
            component="p"
            variant="B1"
            variantMobile="B2"
            weight="semiBold"
            weightMobile="semiBold"
          >
            Исключить только:
          </Typography>
          <div className={classes.variants}>
            <Checkbox
              isSelected={fieldsStore.excludeAt.includes(1)}
              onClick={() => fieldsStore.setExcludeAt(1)}
              title="В названии предложения"
            />
            <Checkbox
              isSelected={fieldsStore.excludeAt.includes(2)}
              onClick={() => fieldsStore.setExcludeAt(2)}
              title="В описании предложения"
            />
            <Checkbox
              isSelected={fieldsStore.excludeAt.includes(3)}
              onClick={() => fieldsStore.setExcludeAt(3)}
              title="В названии компании"
            />
          </div>
        </div>
      </div>
      <Divider />
    </>
  );
}
