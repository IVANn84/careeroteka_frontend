import React, { useCallback, useEffect, useState } from 'react';

import { useStoreVacanciesPage } from 'Page/Vacancies/stores';
import { useDebouncedValue } from 'Hook/useDebouncedValue';
import Input from 'Component/Input';
import Dropdown from 'Component/Dropdown';
import Button from 'Component/Button';

const grades = [
  {
    id: 'no_experience',
    name: 'Intern',
  },
  {
    id: 'from_one_to_three',
    name: 'Junior',
  },
  {
    id: 'from_three_to_six',
    name: 'Middle',
  },
  {
    id: 'more_then_six',
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

interface Props {
  onConfirm?: () => void;
  classes: {[className: string]: string};
}

export default function Form({ classes, onConfirm }: Props) {
  const [val, setValue] = useState('');
  const [error, setError] = useState(false);
  const debouncedValue = useDebouncedValue(val, 500);

  const {
    filtersModalStore: {
      fieldsStore,
      professionsStore,
      fieldsStore: { filters },
    },
    vacanciesStore,
  } = useStoreVacanciesPage();

  useEffect(() => {
    void professionsStore.fetchProfessions();
  }, [professionsStore]);

  useEffect(() => {
    if (debouncedValue) {
      const value = professionsStore.values.find(({ name }) => name === debouncedValue);

      if (value) {
        fieldsStore.setCourse({
          id: value?.id,
          name: value?.name,
        });
        setError(false);
      } else {
        fieldsStore.setCourse(null);
        setError(true);
      }
    } else {
      setError(false);
    }
  }, [debouncedValue, fieldsStore, professionsStore.values]);

  const onFilterChanged = useCallback(fn => value => {
    fn(value);
  }, []);

  const onSubmit = e => {
    e.preventDefault();
    void vacanciesStore.fetchVacancies();
    onConfirm?.();
  };

  return (
    <form className={classes.controls} onSubmit={onSubmit}>
      <Input
        className={classes.searchInput}
        hasHint
        hintOptions={professionsStore.values
          .map(({ id, name }) => ({ id, name }))}
        isClearable
        isDisabled={professionsStore.isLoading}
        isSearchable
        onChange={value => setValue(value)}
        onClear={() => {
          setError(false);
          fieldsStore.setCourse(null);
          vacanciesStore.fetchVacancies(false);
        }}
        onHintSelect={onFilterChanged(value => {
          setValue(value?.name);
          fieldsStore.setCourse(value);
        })}
        onSubmit={() => {
          if (professionsStore.values.find(({ name }) => name === val)) {
            vacanciesStore.fetchVacancies(false);
          }
        }}
        placeholder="Профессия"
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
