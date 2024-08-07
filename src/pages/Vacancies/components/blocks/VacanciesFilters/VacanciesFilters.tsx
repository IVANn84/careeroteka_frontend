import React, { useCallback } from 'react';
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';

import { useStoreVacanciesPage } from 'Page/Vacancies/stores';
import { useModal } from 'Hook/useModal';
import { useDevice } from 'Hook/useDevice';
import Typography from 'Component/Typography';
import Button from 'Component/Button';

import SmallFilters from './components/modals/SmallFilters';
import FiltersModal from './components/modals/Filters';
import Form from './components/form';
import Tabs from './components/Tabs';

const grades = {
  'no experience': 'Intern',
  'between 1 and 3 years': 'Junior',
  'between 3 and 6 years': 'Middle',
  'more than 6 years': 'Senior',
};

export default function VacanciesFilters({ classes }) {
  const {
    filtersModalStore: { fieldsStore },
    vacanciesStore,
  } = useStoreVacanciesPage();
  const device = useDevice();

  const {
    isOpen: isFiltersModalOpen,
    open: openFiltersModal,
    close: closeFiltersModal,
  } = useModal();

  const { isOpen, open, close } = useModal();

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
      {device === 'desktop' ? (
        <Form />
      ) : (
        <>
          <button className={classes.button} onClick={open} type="button">
            {/* <p className={classes.profession}>
              {fieldsStore.filters.searchValues || 'Профессия'}
            </p> */}
            <Typography
              className={classes.profession}
              component="p"
              variant="C1"
              variantMobile="C1"
              weightMobile="bold"
            >
              {fieldsStore.filters.byCourse?.name || 'Профессия'}
            </Typography>
            <Typography
              className={classes.profession}
              component="p"
              variant="C1"
              variantMobile="C1"
            >
              {fieldsStore.filters.isAbroad
                ? 'За рубежом'
                : fieldsStore.filters.isAbroad === null
                  ? 'Где искать'
                  : 'Россия'}
              {' '}
              <span>•</span>
              {' '}
              {fieldsStore.filters.experience.length > 0 ? (
                fieldsStore.filters.experience.map(item => (
                  <span>
                    {grades[item]}
                    ,
                    {' '}
                  </span>
                ))
              ) : (
                <span>Грейд</span>
              )}
            </Typography>
          </button>
          <SmallFilters
            isDisplay={isOpen}
            onConfirm={close}
            onDecline={close}
          />
        </>
      )}
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
