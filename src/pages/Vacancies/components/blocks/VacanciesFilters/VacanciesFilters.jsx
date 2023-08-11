import React from 'react';
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';

import { useStoreVacanciesPage } from 'Page/Vacancies/stores';

import { useModal } from 'Hook/useModal';

import Input from 'Component/Input';
import Button from 'Component/Button';
import Dropdown from 'Component/Dropdown';
import Tabs from './components/Tabs';
import FiltersModal from './components/modals/Filters';

export default function VacanciesFilters({
  classes,
}) {
  const {
    vacanciesStore,
    fieldsStore,
    gradesStore,
  } = useStoreVacanciesPage();

  const {
    isOpen: isFiltersModalOpen,
    open: openFiltersModal,
    close: closeFiltersModal,
  } = useModal();

  const onApplyFilters = () => {
    closeFiltersModal();
  };

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
        <Button
          variant="outlined"
          mode="dark"
          isDisabled={vacanciesStore.isLoading}
          onClick={openFiltersModal}
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
