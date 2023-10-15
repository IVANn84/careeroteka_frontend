import React, { useEffect } from 'react';

import Modal from 'Component/Modal';
import Button from 'Component/Button';

import { useStoreVacanciesPage } from 'Page/Vacancies/stores';
import Types from './components/Types';
import WordsSearch from './components/WordsSearch';
import Salary from './components/Salary';
import Grades from './components/Grades';
import Other from './components/Other';

export default function Filters({
  classes,
  isDisplay,

  onDecline,
  onConfirm,
}) {
  const {
    filtersModalStore,
    filtersModalStore: {
      vacanciesStore,
      fieldsStore,
    },
  } = useStoreVacanciesPage();

  useEffect(() => {
    vacanciesStore.fetchVacancyList();
    return filtersModalStore.reset;
  }, [isDisplay, fieldsStore, filtersModalStore.reset, vacanciesStore]);

  return (
    <Modal.Modal
      isDisplayed={isDisplay}
      onClose={onDecline}
      className={classes.container}
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
      </Modal.Content>
      <Modal.Footer>
        <Button
          variant="outlined"
          mode="dark"
          onClick={onDecline}
        >
          Отменить
        </Button>
        <Button
          mode="dark"
          onClick={onConfirm}
        >
          Удалить
        </Button>
      </Modal.Footer>
    </Modal.Modal>
  );
}
