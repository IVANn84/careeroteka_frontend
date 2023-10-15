import React from 'react';
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';

import { useStoreVacanciesPage } from 'Page/Vacancies/stores';
import { useModal } from 'Hook/useModal';
import Input from 'Component/Input';
import Dropdown from 'Component/Dropdown';
import Button from 'Component/Button';

import FiltersModal from './components/modals/Filters';
import Tabs from './components/Tabs';

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
            isClearable
            isDisabled={vacanciesStore.isLoading}
            isSearchable
            onChange={fieldsStore.setSearchVacancy}
            onClear={() => vacanciesStore.fetchVacancies(false)}
            onSubmit={() => vacanciesStore.fetchVacancies(false)}
            placeholder="Поиск вакансии"
            type="text"
            value={fieldsStore.searchVacancy}
          />
          <Dropdown
            className={classes.gradesDropdown}
            isClearable
            isDisabled={gradesStore.isLoading || vacanciesStore.isLoading}
            mode="light"
            onSelect={fieldsStore.setGrade}
            options={gradesStore.values}
            placeholder="Выберите грейд"
            selectedId={fieldsStore.gradeId}
            selectedValue={fieldsStore.gradeName}
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
