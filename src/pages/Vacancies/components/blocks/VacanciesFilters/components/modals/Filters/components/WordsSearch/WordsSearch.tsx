import React from 'react';

import { useStoreVacanciesPage } from 'Page/Vacancies/stores';
import Typography from 'Component/Typography';
import Input from 'Component/Input';
import Checkbox from 'Component/Checkbox';

export default function WordsSearch({
  classes,
}) {
  const {
    filtersModalStore: {
      fieldsStore,
      fieldsStore: { filters },
    },
  } = useStoreVacanciesPage();

  return (
    <>
      <Typography
        className={classes.title}
        component="p"
        variant="H5"
        variantMobile="B1"
        weightMobile="semiBold"
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
            weightMobile="medium"
          >
            Найти предложения со словами:
          </Typography>
          <Input
            isClearable
            onChange={fieldsStore.setSearchValues}
            placeholder="Веб-дизайн, интерфейсы"
            type="text"
            value={filters.searchValues}
          />
          <Typography
            className={classes.descriptionAt}
            component="p"
            variant="B1"
            variantMobile="B2"
            weight="semiBold"
            weightMobile="medium"
          >
            Искать только:
          </Typography>
          <div className={classes.variants}>
            <Checkbox
              isSelected={filters.searchBy.includes('by_name')}
              onClick={() => fieldsStore.setSearchBy('by_name')}
              title="В названии предложения"
            />
            <Checkbox
              isSelected={filters.searchBy.includes('by_description')}
              onClick={() => fieldsStore.setSearchBy('by_description')}
              title="В описании предложения"
            />
            <Checkbox
              isSelected={filters.searchBy.includes('by_company_name')}
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
            weightMobile="medium"
          >
            Исключить предложения со словами:
          </Typography>
          <Input
            isClearable
            onChange={fieldsStore.setExcludeValues}
            placeholder="Веб-дизайн, интерфейсы"
            type="text"
            value={filters.excludeValues}
          />
          <Typography
            className={classes.descriptionAt}
            component="p"
            variant="B1"
            variantMobile="B2"
            weight="semiBold"
            weightMobile="medium"
          >
            Исключить только:
          </Typography>
          <div className={classes.variants}>
            <Checkbox
              isSelected={filters.excludeBy.includes('by_name')}
              onClick={() => fieldsStore.setExcludeBy('by_name')}
              title="В названии предложения"
            />
            <Checkbox
              isSelected={filters.excludeBy.includes('by_description')}
              onClick={() => fieldsStore.setExcludeBy('by_description')}
              title="В описании предложения"
            />
            <Checkbox
              isSelected={filters.excludeBy.includes('by_company_name')}
              onClick={() => fieldsStore.setExcludeBy('by_company_name')}
              title="В названии компании"
            />
          </div>
        </div>
      </div>
    </>
  );
}
