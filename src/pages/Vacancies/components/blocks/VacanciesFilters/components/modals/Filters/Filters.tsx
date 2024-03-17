import React, { useCallback, useEffect } from 'react';

import { useStoreVacanciesPage } from 'Page/Vacancies/stores';
import { useDevice } from 'Hook/useDevice';
import Modal from 'Component/Modal';
import Button from 'Component/Button';

import WordsSearch from './components/WordsSearch';
// import Types from './components/Types';
import Salary from './components/Salary';
import Other from './components/Other';
import Grades from './components/Grades';
// import Characteristics from './components/Characteristics';

export default function Filters({
  classes,
  isDisplay,

  onDecline,
  onConfirm,
}) {
  const {
    filtersModalStore: {
      vacanciesStore: salaryStore,
      fieldsStore,
      averageSalaryStore,
    },
    vacanciesStore,
  } = useStoreVacanciesPage();
  const device = useDevice();

  const onReset = useCallback(() => {
    fieldsStore.reset();
    vacanciesStore.fetchVacancies();
    onDecline();
  }, [fieldsStore, onDecline, vacanciesStore]);

  useEffect(() => {
    salaryStore.fetchVacancyList();
    averageSalaryStore.fetchAverageSalary();
  }, [isDisplay, fieldsStore, salaryStore, averageSalaryStore]);

  return (
    <Modal.Modal
      className={classes.container}
      isDisplayed={isDisplay}
      onClose={onDecline}
    >
      <Modal.Header hasDivider={device === 'desktop'} onDecline={onDecline}>
        Фильтры
      </Modal.Header>
      <Modal.Content className={classes.content} hasDivider={device === 'desktop'}>
        {/* <Types /> */}
        <WordsSearch />
        <Salary />
        <Grades />
        <Other />
        {/* <Characteristics /> */}
      </Modal.Content>
      <Modal.Footer className={classes.footer}>
        <Button
          className={classes.button}
          mode="secondary"
          onClick={onReset}
          variant="outlined"
        >
          Сбросить фильтры
        </Button>
        <Button
          mode="dark"
          onClick={onConfirm}
        >
          Показать предложения
        </Button>
      </Modal.Footer>
    </Modal.Modal>
  );
}
