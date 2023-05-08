import React from 'react';

import { useStoreProfessionPage } from 'Page/Profession/stores';
import Block from 'Component/Block';
import LinkDropdown from 'Component/LinkDropdown';
import Typography from 'Component/Typography';
import { Code } from 'react-content-loader';

export default function Description({
  classes,
}) {
  const {
    entityStore,
  } = useStoreProfessionPage();

  return (
    <Block
      isSlim
      className={classes.container}
    >
      <Typography
        variant="H2"
        variantMobile="H3"
        component="h2"
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
