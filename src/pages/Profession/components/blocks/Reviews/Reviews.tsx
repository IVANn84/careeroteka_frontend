/* eslint-disable react/no-array-index-key */
import React from 'react';

import { useStoreProfessionPage } from 'Page/Profession/stores';
import { useDevice } from 'Hook/useDevice';
import Typography from 'Component/Typography';
import Block from 'Component/Block';

import Review from './components/Review';
import BlocksSkeleton from './components/BlocksSkeleton';

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
        className={classes.header}
        component="h2"
        variant="H2"
        variantMobile="H3"
      >
        Оценка профессии
      </Typography>
      <Typography
        className={classes.description}
        component="p"
        variant="B1"
        variantMobile="B2"
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
                borderRadius="16px"
                borderRadiusMobile="16px"
                className={classes.rates}
                key={index}
                mode="dark"
                padding="36px 19px"
                paddingMobile="36px 19px"
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
