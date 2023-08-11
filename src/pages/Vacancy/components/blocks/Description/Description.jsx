import React from 'react';
import { Code } from 'react-content-loader';

import { useStoreVacancyPage } from 'Page/Vacancy/stores';
import Block from 'Component/Block';
import Typography from 'Component/Typography';

export default function Description({
  classes,
}) {
  const {
    entityStore,
  } = useStoreVacancyPage();

  return (
    <Block className={classes.container}>
      <Typography
        variant="B1"
        variantMobile="B2"
        className={classes.description}
      >
        {
          entityStore.isLoading
            ? (
              <Code />
            )
            : (
              // eslint-disable-next-line react/no-danger
              <div dangerouslySetInnerHTML={{ __html: entityStore.entity?.description }} />
            )
        }
      </Typography>
    </Block>
  );
}
