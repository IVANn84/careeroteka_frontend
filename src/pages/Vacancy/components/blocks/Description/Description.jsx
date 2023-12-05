import { Code } from 'react-content-loader';
import React from 'react';

import { useStoreVacancyPage } from 'Page/Vacancy/stores';
import Typography from 'Component/Typography';
import Block from 'Component/Block';

import Tabs from './components/Tabs';

export default function Description({
  classes,
}) {
  const {
    entityStore,
  } = useStoreVacancyPage();

  return (
    <Block className={classes.container} padding={[[36, 48]]}>
      <Tabs />
      <Typography
        variant="B1"
        variantMobile="B2"
      >
        {
          entityStore.isLoading
            ? (
              <Code />
            )
            : (
              <div
                className={classes.description}
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{ __html: entityStore.entity?.rawDescription }}
              />
            )
        }
      </Typography>
    </Block>
  );
}
