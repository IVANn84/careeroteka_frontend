import React from 'react';

import { useStoreVacancyPage } from 'Page/Vacancy/stores';
import Button from 'Component/Button';
import Block from 'Component/Block';

import ShareIcon from './ShareIcon';

export default function Response({ classes }) {
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
        onClick={() => window.open(entityStore.entity?.link, '_blank')}
      >
        Откликнуться
      </Button>
      <Button
        className={classes.buttonShare}
        isDisabled={entityStore.isLoading}
      >
        <ShareIcon />
      </Button>
    </Block>
  );
}
