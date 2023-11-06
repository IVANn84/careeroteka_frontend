import React, { useCallback, useEffect } from 'react';

import { useStoreVacanciesPage } from 'Page/Vacancies/stores';
import Modal from 'Component/Modal';
import Button from 'Component/Button';

import WordsSearch from './components/WordsSearch';
import Types from './components/Types';
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
      vacanciesStore,
      fieldsStore,
    },
  } = useStoreVacanciesPage();

  const onReset = useCallback(() => {
    fieldsStore.reset();
    onDecline();
  }, [fieldsStore, onDecline]);

  useEffect(() => {
    vacanciesStore.fetchVacancyList();
  }, [isDisplay, fieldsStore, vacanciesStore]);

  return (
    <Modal.Modal
      className={classes.container}
      isDisplayed={isDisplay}
      onClose={onDecline}
    >
      <Modal.Header onDecline={onDecline}>
        Фильтры
      </Modal.Header>
      <Modal.Content className={classes.content}>
        <Types />
        <WordsSearch />
        <Salary />
        <Grades />
        <Other />
        {/* <Characteristics /> */}
      </Modal.Content>
      <Modal.Footer className={classes.footer}>
        <Button
          mode="dark"
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
