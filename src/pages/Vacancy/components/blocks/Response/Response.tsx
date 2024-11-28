import React from 'react';

import { useStoreVacancyPage } from 'Page/Vacancy/stores';
import { useModal } from 'Hook/useModal';
import Button from 'Component/Button';
import Block from 'Component/Block';

import ShareButton from './ShareButton';
import ResponseButtonsBox from '../ResponseButtonsBox';

export default function Response({ classes }) {
  const { isOpen, open, close } = useModal();

  const { entityStore } = useStoreVacancyPage();

  return (
    <Block
      borderRadius={12}
      borderRadiusMobile={12}
      className={classes.container}
      padding={[[16, 20]]}
      paddingMobile={[[24, 16]]}
    >
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
      <ShareButton />
    </Block>
  );
}
