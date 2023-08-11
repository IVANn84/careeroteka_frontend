import React from 'react';

import { useStoreVacanciesPage } from 'Page/Vacancies/stores';

import Input from 'Component/Input';
import Dropdown from 'Component/Dropdown';
import Tabs from './components/Tabs';

export default function VacanciesFilters({
  classes,
}) {
  const {
    vacanciesStore,
    fieldsStore,
    gradesStore,
  } = useStoreVacanciesPage();

  return (
    <div className={classes.container}>
      <Tabs />
      <div className={classes.controls}>
        <div className={classes.filtersContainer}>
          <Input
            className={classes.searchButton}
            type="text"
            placeholder="Поиск вакансии"
            value={fieldsStore.searchVacancy}
            onChange={fieldsStore.setSearchVacancy}
            onSubmit={() => vacanciesStore.fetchVacancies(false)}
            onClear={() => vacanciesStore.fetchVacancies(false)}
            isDisabled={vacanciesStore.isLoading}
            isClearable
            isSearchable
          />
          <Dropdown
            className={classes.gradesDropdown}
            mode="primary"
            placeholder="Выберите грейд"
            options={gradesStore.values}
            isDisabled={gradesStore.isLoading || vacanciesStore.isLoading}
            selectedId={fieldsStore.gradeId}
            selectedValue={fieldsStore.gradeName}
            isClearable
            onSelect={fieldsStore.setGrade}
          />
        </div>
      </div>
    </div>
  );
}
