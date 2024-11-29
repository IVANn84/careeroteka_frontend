import React from 'react';

import { useStoreVacancyPage } from 'Page/Vacancy/stores';
import { useModal } from 'Hook/useModal';
import Button from 'Component/Button';

import ResponseButtonsBox from './ResponseButtonsBox';

interface Props {
  classes?: { [className: string]: string };
}
export default function ResponseButton({ classes }: Props) {
  const { entityStore } = useStoreVacancyPage();
  const { isOpen, open, close } = useModal();
  return (
    <>
      <Button
        className={classes.buttonResponse}
        isDisabled={entityStore.isLoading}
        // onClick={() => window.open(entityStore.entity?.link, '_blank')}
        onClick={open}
      >
        Откликнуться
      </Button>
      <ResponseButtonsBox
        isDisplay={isOpen}
        onConfirm={close}
        onDecline={close}
      />
    </>
  );
}
