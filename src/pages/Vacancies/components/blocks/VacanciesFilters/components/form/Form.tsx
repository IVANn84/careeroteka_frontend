import React, { useCallback } from 'react';

import { useStoreVacanciesPage } from 'Page/Vacancies/stores';
import Input from 'Component/Input';
import Dropdown from 'Component/Dropdown';
import Button from 'Component/Button';

const grades = [
  {
    id: 'no experience',
    name: 'Intern',
  },
  {
    id: 'between 1 and 3 years',
    name: 'Junior',
  },
  {
    id: 'between 3 and 6 years',
    name: 'Middle',
  },
  {
    id: 'more than 6 years',
    name: 'Senior',
  },
];

const source = [
  {
    id: 1,
    isAbroad: false,
    name: 'Россия',
  },
  {
    id: 2,
    isAbroad: true,
    name: 'Зарубеж',
  },
];

export default function Form({ classes }) {
  const {
    filtersModalStore: {
      fieldsStore,
      fieldsStore: { filters },
    },
    vacanciesStore,
  } = useStoreVacanciesPage();

  const onFilterChanged = useCallback(fn => value => {
    fn(value);
  }, []);

  const onSubmit = e => {
    e.preventDefault();
    void vacanciesStore.fetchVacancies();
  };

  return (
    <form className={classes.controls} onSubmit={onSubmit}>
      <Input
        className={classes.searchInput}
        isClearable
        isDisabled={vacanciesStore.isLoading}
        isSearchable
        onChange={fieldsStore.setSearchValues}
        onClear={() => vacanciesStore.fetchVacancies(false)}
        onSubmit={() => vacanciesStore.fetchVacancies(false)}
        placeholder="Профессия"
        type="text"
        value={filters.searchValues}
      />
      <Dropdown
        checkIsSelected={({ id }) => filters.experience.includes(id)}
        className={classes.gradesDropdown}
        isClearable
        isDisabled={vacanciesStore.isLoading}
        mode="light"
        onSelect={onFilterChanged(value => fieldsStore.setExperience(value?.id))}
        options={grades}
        placeholder="Выберите грейд"
        selectedValue={grades
          .filter(({ id }) => filters.experience.includes(id))
          .map(({ name }) => name)
          .join(', ')}
      />
      <Dropdown
        checkIsSelected={({ isAbroad }) => filters.isAbroad === isAbroad}
        className={classes.gradesDropdown}
        isClearable
        isDisabled={vacanciesStore.isLoading}
        mode="light"
        onSelect={onFilterChanged(value => fieldsStore.setIsAbroad(value?.isAbroad))}
        options={source}
        placeholder="Где искать"
        selectedValue={
            source.find(({ isAbroad }) => filters.isAbroad === isAbroad)?.name
          }
      />
      <Button
        className={classes.searchButton}
        isDisabled={
          !filters.searchValues
          && !filters.experience.length
          && filters.isAbroad === null
        }
        mode="primary"
        type="submit"
        variant="filled"
      >
        Поиск
      </Button>
    </form>
  );
}
