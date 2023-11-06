import React, { useCallback } from 'react';
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';

import { useStoreVacanciesPage } from 'Page/Vacancies/stores';
import { useModal } from 'Hook/useModal';
import Input from 'Component/Input';
import Dropdown from 'Component/Dropdown';
import Button from 'Component/Button';

import FiltersModal from './components/modals/Filters';
import Tabs from './components/Tabs';

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

export default function VacanciesFilters({
  classes,
}) {
  const {
    filtersModalStore: {
      fieldsStore,
    },
    vacanciesStore,
  } = useStoreVacanciesPage();

  const {
    isOpen: isFiltersModalOpen,
    open: openFiltersModal,
    close: closeFiltersModal,
  } = useModal();

  const onApplyFilters = useCallback(() => {
    vacanciesStore.fetchVacancies();
    closeFiltersModal();
  }, [closeFiltersModal, vacanciesStore]);

  const onFilterChanged = useCallback(fn => value => {
    fn(value);
    vacanciesStore.fetchVacancies();
  }, [vacanciesStore]);

  return (
    <div className={classes.container}>
      <Tabs />
      <div className={classes.controls}>
        <div className={classes.filtersContainer}>
          <Input
            className={classes.searchButton}
            isClearable
            isDisabled={vacanciesStore.isLoading}
            isSearchable
            onChange={fieldsStore.setSearchValues}
            onClear={() => vacanciesStore.fetchVacancies(false)}
            onSubmit={() => vacanciesStore.fetchVacancies(false)}
            placeholder="Поиск вакансии"
            type="text"
            value={fieldsStore.searchValues}
          />
          <Dropdown
            checkIsSelected={({ id }) => fieldsStore.experience.includes(id)}
            className={classes.gradesDropdown}
            isClearable
            isDisabled={vacanciesStore.isLoading}
            mode="light"
            onSelect={onFilterChanged(value => fieldsStore.setExperience(value?.id))}
            options={grades}
            placeholder="Выберите грейд"
            selectedValue={grades.filter(({ id }) => fieldsStore.experience.includes(id)).map(({ name }) => name).join(', ')}
          />
        </div>
        <Button
          isDisabled={vacanciesStore.isLoading}
          mode="dark"
          onClick={openFiltersModal}
          variant="outlined"
        >
          <span className={classes.filtersButtonContent}>
            <AdjustmentsHorizontalIcon width={24} />
            Фильтры
          </span>
        </Button>
        <FiltersModal
          isDisplay={isFiltersModalOpen}
          onConfirm={onApplyFilters}
          onDecline={closeFiltersModal}
        />
      </div>
    </div>
  );
}
