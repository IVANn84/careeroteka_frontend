import React from 'react';

import { useStoreVacancyPage } from 'Page/Vacancy/stores';
import { useModal } from 'Hook/useModal';
import ShareIcon from 'Component/Icon/icons/ShareIcon';
import Button from 'Component/Button';

import ShareLinkBox from './ShareLinkBox';

interface Props {
  classes?: {[className: string]: string};
}
export default function ShareButton({ classes }:Props) {
  const { entityStore } = useStoreVacancyPage();
  const { isOpen, open, close } = useModal();
  return (
    <>
      {' '}
      <Button
        className={classes.buttonShare}
        isDisabled={entityStore.isLoading}
        mode="secondary"
        onClick={open}
        variant="outlined"
      >
        <ShareIcon />
      </Button>
      <ShareLinkBox
        isDisplay={isOpen}
        onConfirm={close}
        onDecline={close}
      />
    </>
  );
}
