import React from 'react';

import { useStoreProfessionPage } from 'Page/Profession/stores';

import Block from 'Component/Block';
import Typography from 'Component/Typography';
import BlocksSkeleton from './components/BlocksSkeleton';

export default function Skills({
  classes,
}) {
  const {
    entityStore,
  } = useStoreProfessionPage();

  return (
    <Block>
      <Typography
        variant="H2"
        variantMobile="H3"
        component="h2"
        className={classes.header}
      >
        Навыки
      </Typography>
      <div className={classes.container}>
        <BlocksSkeleton isDisplayed={entityStore.isLoadingSkills}>
          {entityStore.entity?.skills?.map(skill => (
            <Block
              key={skill.id}
              mode="dark"
              padding="12px"
              paddingMobile="12px"
              borderRadius="16px"
              borderRadiusMobile="16px"
              className={classes.skill}
            >
              <Typography
                variant="B1"
                variantMobile="B2"
              >
                {skill.name}
                <Typography
                  variant="B1"
                  variantMobile="B2"
                  weight="semiBold"
                  weightMobile="semiBold"
                >
                  {skill.value}
                </Typography>
              </Typography>
            </Block>
          ))}
        </BlocksSkeleton>
      </div>
    </Block>
  );
}
