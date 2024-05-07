import React, { useCallback } from 'react';
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';

import { useStoreVacanciesPage } from 'Page/Vacancies/stores';
import { useModal } from 'Hook/useModal';
import { useDevice } from 'Hook/useDevice';
import Button from 'Component/Button';

import FiltersModal from './components/modals/Filters';
import Form from './components/form';
import Tabs from './components/Tabs';

export default function VacanciesFilters({
  classes,
}) {
  const {
    filtersModalStore: {
      fieldsStore,
    },
    vacanciesStore,
  } = useStoreVacanciesPage();
  const device = useDevice();

  const {
    isOpen: isFiltersModalOpen,
    open: openFiltersModal,
    close: closeFiltersModal,
  } = useModal();

  const onApplyFilters = useCallback(() => {
    void vacanciesStore.fetchVacancies();
    closeFiltersModal();
  }, [closeFiltersModal, vacanciesStore]);

  const onDeclineFilters = useCallback(() => {
    fieldsStore.restoreFilters();
    void vacanciesStore.fetchVacancies();
    closeFiltersModal();
  }, [closeFiltersModal, fieldsStore, vacanciesStore]);

  return (
    <div className={classes.container}>
      <Form />
      <div className={classes.tabs}>
        <Tabs />
        <Button
          className={classes.filterButton}
          isDisabled={vacanciesStore.isLoading}
          mode="secondary"
          onClick={openFiltersModal}
          variant="outlined"
        >
          <span className={classes.filtersButtonContent}>
            <AdjustmentsHorizontalIcon width={device === 'desktop' ? 18 : 28} />
            {device === 'desktop' && 'Фильтры'}
          </span>
        </Button>
        <FiltersModal
          isDisplay={isFiltersModalOpen}
          onConfirm={onApplyFilters}
          onDecline={onDeclineFilters}
        />
      </div>
    </div>
  );
}
