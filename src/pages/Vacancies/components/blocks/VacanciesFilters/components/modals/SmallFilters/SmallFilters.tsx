import React, { useCallback, useEffect } from 'react';

import { useStoreVacanciesPage } from 'Page/Vacancies/stores';
import Typography from 'Component/Typography';
import Modal from 'Component/Modal';
import Button from 'Component/Button';

import Form from '../../form';

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
  } = useStoreVacanciesPage();
  const onReset = useCallback(() => {
    fieldsStore.reset();
    salaryStore.fetchVacancyList();
    onDecline();
  }, [fieldsStore, onDecline, salaryStore]);

  useEffect(() => {
    salaryStore.fetchVacancyList();
    averageSalaryStore.fetchAverageSalary();
  }, [isDisplay, fieldsStore, salaryStore, averageSalaryStore]);

  return (
    <Modal.Modal
      className={classes.container}
      isDisplayed={isDisplay}
      onClose={onDecline}
      variant="small"
    >
      <Modal.Header className={classes.header} onDecline={onDecline} />
      <Modal.Content className={classes.content}>
        <Typography
          className={classes.title}
          component="p"
          variant="H4"
          variantMobile="H4"
        >
          Поиск предложений
        </Typography>
        <Form onConfirm={onConfirm} />
        <Button
          className={classes.button}
          mode="secondary"
          onClick={onReset}
          variant="outlined"
        >
          Сбросить все фильтры
        </Button>
      </Modal.Content>
    </Modal.Modal>
  );
}
