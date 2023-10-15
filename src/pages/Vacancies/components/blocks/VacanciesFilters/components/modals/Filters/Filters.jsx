import React, { useEffect } from 'react';

import Modal from 'Component/Modal';
import Button from 'Component/Button';

import { useStoreVacanciesPage } from 'Page/Vacancies/stores';
import Types from './components/Types';
import WordsSearch from './components/WordsSearch';
import Salary from './components/Salary';
import Grades from './components/Grades';
import Other from './components/Other';
import Characteristics from './components/Characteristics';

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
        <Characteristics />
      </Modal.Content>
      <Modal.Footer className={classes.footer}>
        <Button
          variant="outlined"
          mode="dark"
          onClick={fieldsStore.reset}
        >
          Сбросить фильтры
        </Button>
        <Button
          mode="dark"
          onClick={onConfirm}
        >
          Показать 4 предложения
        </Button>
      </Modal.Footer>
    </Modal.Modal>
  );
}
