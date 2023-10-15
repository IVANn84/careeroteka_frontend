import { Code } from 'react-content-loader';
import React from 'react';

import { useStoreProfessionPage } from 'Page/Profession/stores';
import Typography from 'Component/Typography';
import LinkDropdown from 'Component/LinkDropdown';
import Block from 'Component/Block';

export default function Description({
  classes,
}) {
  const {
    entityStore,
  } = useStoreProfessionPage();

  return (
    <Block
      className={classes.container}
      isSlim
    >
      <Typography
        component="h2"
        variant="H2"
        variantMobile="H3"
      >
        Чем занимается?
      </Typography>
      <Typography
        variant="B1"
        variantMobile="B2"
      >
        {entityStore.isLoading
          ? (
            <Code />
          )
          : (
            <LinkDropdown quantity={260}>
              {entityStore.entity?.description}
            </LinkDropdown>
          )}
      </Typography>
    </Block>
  );
}
