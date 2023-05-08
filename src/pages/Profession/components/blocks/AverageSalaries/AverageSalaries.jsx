import React from 'react';
import accounting from 'accounting-big';

import { useStoreProfessionPage } from 'Page/Profession/stores';

import Block from 'Component/Block';
import Typography from 'Component/Typography';
import { useDevice } from 'Hook/useDevice';
import BlockSkeleton from './components/BlockSkeleton';

export default function AverageSalaries({
  classes,
}) {
  const deviceType = useDevice();

  const {
    entityStore,
  } = useStoreProfessionPage();

  const formatMoney = value => accounting.formatMoney(value, {
    symbol: '',
    precision: 0,
    thousand: ' ',
  });

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
        Средняя зарплата
      </Typography>
      <div className={classes.containerSalaries}>
        <BlockSkeleton isDisplayed={entityStore.isLoadingSalaries}>
          <Block
            mode="dark"
            padding="20px 24px"
            paddingMobile="20px 24px"
            borderRadius="16px"
            borderRadiusMobile="16px"
          >
            <Typography
              variant="B1"
              variantMobile="B1"
              component="h3"
            >
              В регионах
            </Typography>
            <Typography
              variant="H3"
              variantMobile="H4"
            >
              {formatMoney(entityStore.entity?.salaries?.inRegion?.minValue)}
              {' '}
              -
              {deviceType === 'desktop' ? '' : <br />}
              {' '}
              {formatMoney(entityStore.entity?.salaries?.inRegion?.maxValue)}
              {' '}
              ₽
            </Typography>
          </Block>
        </BlockSkeleton>
        <BlockSkeleton isDisplayed={entityStore.isLoadingSalaries}>
          <Block
            mode="dark"
            padding="20px 24px"
            paddingMobile="20px 24px"
            borderRadius="16px"
            borderRadiusMobile="16px"
          >
            <Typography
              variant="B1"
              variantMobile="B1"
              component="h3"
            >
              В столице
            </Typography>
            <Typography
              variant="H3"
              variantMobile="H4"
            >
              {formatMoney(entityStore.entity?.salaries?.inCapital?.minValue)}
              {' '}
              -
              {deviceType === 'desktop' ? '' : <br />}
              {' '}
              {formatMoney(entityStore.entity?.salaries?.inCapital?.maxValue)}
              {' '}
              ₽
            </Typography>
          </Block>
        </BlockSkeleton>
      </div>
    </Block>
  );
}
