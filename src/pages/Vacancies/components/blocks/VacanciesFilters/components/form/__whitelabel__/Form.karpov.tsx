import React, { useCallback, useEffect, useState } from 'react';

import { useStoreVacanciesPage } from 'Page/Vacancies/stores';
import { useDebouncedValue } from 'Hook/useDebouncedValue';
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
  const [val, setValue] = useState('');
  const [error, setError] = useState(false);
  const debouncedValue = useDebouncedValue(val, 500);

  const {
    filtersModalStore: {
      fieldsStore,
      coursesByPartnerStore,
      fieldsStore: { filters },
    },
    vacanciesStore,
  } = useStoreVacanciesPage();

  useEffect(() => {
    void coursesByPartnerStore.fetchCoursesByPartner();
  }, [coursesByPartnerStore]);

  useEffect(() => {
    if (debouncedValue) {
      const value = coursesByPartnerStore.values.find(({ name }) => name === debouncedValue);

      if (value) {
        fieldsStore.setCourseId(String(value?.id));
        setError(false);
      } else {
        fieldsStore.setCourseId(null);
        setError(true);
      }
    } else {
      setError(false);
    }
  }, [coursesByPartnerStore, debouncedValue, fieldsStore]);

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
        hasHint
        hintOptions={coursesByPartnerStore.values
          .map(({ id, name }) => ({ id, name }))}
        isClearable
        isDisabled={coursesByPartnerStore.isLoading}
        isSearchable
        onChange={value => setValue(value)}
        onClear={() => {
          setError(false);
          fieldsStore.setCourseId(null);
          vacanciesStore.fetchVacancies(false);
        }}
        onHintSelect={onFilterChanged(value => {
          setValue(value?.name);
          fieldsStore.setCourseId(String(value?.id));
        })}
        onSubmit={() => {
          if (coursesByPartnerStore.values.find(({ name }) => name === val)) {
            vacanciesStore.fetchVacancies(false);
          }
        }}
        placeholder="Поиск по направлениям"
        type="text"
        value={val}
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
          (error || !filters.byCourse)
          && (error || !filters.experience.length)
          && (error || filters.isAbroad === null)
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
