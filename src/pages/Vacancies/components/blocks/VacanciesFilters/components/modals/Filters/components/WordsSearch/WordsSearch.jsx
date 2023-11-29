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
            onChange={fieldsStore.setSearchValues}
            placeholder="Веб-дизайн, интерфейсы"
            type="text"
            value={fieldsStore.searchValues}
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
              isSelected={fieldsStore.searchBy.includes('by_name')}
              onClick={() => fieldsStore.setSearchBy('by_name')}
              title="В названии предложения"
            />
            <Checkbox
              isSelected={fieldsStore.searchBy.includes('by_description')}
              onClick={() => fieldsStore.setSearchBy('by_description')}
              title="В описании предложения"
            />
            <Checkbox
              isSelected={fieldsStore.searchBy.includes('by_company_name')}
              onClick={() => fieldsStore.setSearchBy('by_company_name')}
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
            onChange={fieldsStore.setExcludeValues}
            placeholder="Веб-дизайн, интерфейсы"
            type="text"
            value={fieldsStore.excludeValues}
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
              isSelected={fieldsStore.excludeBy.includes('by_name')}
              onClick={() => fieldsStore.setExcludeBy('by_name')}
              title="В названии предложения"
            />
            <Checkbox
              isSelected={fieldsStore.excludeBy.includes('by_description')}
              onClick={() => fieldsStore.setExcludeBy('by_description')}
              title="В описании предложения"
            />
            <Checkbox
              isSelected={fieldsStore.excludeBy.includes('by_company_name')}
              onClick={() => fieldsStore.setExcludeBy('by_company_name')}
              title="В названии компании"
            />
          </div>
        </div>
      </div>
      <Divider />
    </>
  );
}
