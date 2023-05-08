/* eslint-disable react/no-array-index-key */
import React from 'react';

import { useStoreProfessionPage } from 'Page/Profession/stores';

import Block from 'Component/Block';
import Typography from 'Component/Typography';
import { useDevice } from 'Hook/useDevice';
import BlocksSkeleton from './components/BlocksSkeleton';
import Review from './components/Review';

export default function Reviews({
  classes,
}) {
  const deviceType = useDevice();

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
        Оценка профессии
      </Typography>
      <Typography
        variant="B1"
        variantMobile="B2"
        component="p"
        className={classes.description}
      >
        Посмотрите, как реальные специалисты
        {' '}
        <br />
        {' '}
        в этой профессии оценивают свою работу.
      </Typography>
      <div className={classes.container}>
        <BlocksSkeleton isDisplayed={entityStore.isLoadingReviews}>
          {(deviceType === 'desktop'
            ? entityStore.reviewBlocks
            : [entityStore.entity?.reviews || []]).map((block, index) => (
              <Block
                key={index}
                mode="dark"
                padding="36px 19px"
                paddingMobile="36px 19px"
                borderRadius="16px"
                borderRadiusMobile="16px"
                className={classes.rates}
              >
                {block.map(({ id, name, value }) => (
                  <Review
                    key={id}
                    name={name}
                    value={value}
                  />
                ))}
              </Block>
          ))}
        </BlocksSkeleton>
      </div>
    </Block>
  );
}
