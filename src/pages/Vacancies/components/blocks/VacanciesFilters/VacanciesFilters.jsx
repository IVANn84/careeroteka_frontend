import React from 'react';
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';

import { useStoreVacanciesPage } from 'Page/Vacancies/stores';

import Input from 'Component/Input';
import Button from 'Component/Button';
import Tabs from './components/Tabs';

export default function VacanciesFilters({
  classes,
}) {
  const {
    vacanciesStore,
    fieldsStore,
  } = useStoreVacanciesPage();

  return (
    <div className={classes.container}>
      <Tabs />
      <div className={classes.controls}>
        <Input
          className={classes.searchButton}
          type="text"
          placeholder="Поиск вакансии"
          value={fieldsStore.searchVacancy}
          onChange={fieldsStore.setSearchVacancy}
          onSubmit={() => vacanciesStore.fetchVacancies(false)}
          onClear={() => vacanciesStore.fetchVacancies(false)}
          isClearable
          isSearchable
        />
        <Button
          variant="outlined"
          mode="dark"
        >
          <span className={classes.filtersButtonContent}>
            <AdjustmentsHorizontalIcon width={24} />
            Фильтры
          </span>
        </Button>
      </div>
    </div>
  );
}
