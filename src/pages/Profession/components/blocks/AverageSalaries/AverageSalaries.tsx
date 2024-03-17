import React from 'react';
import accounting from 'accounting-big';

import { useStoreProfessionPage } from 'Page/Profession/stores';
import { useDevice } from 'Hook/useDevice';
import Typography from 'Component/Typography';
import Block from 'Component/Block';

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
      className={classes.container}
      isSlim
    >
      <Typography
        component="h2"
        variant="H2"
        variantMobile="H3"
      >
        Средняя зарплата
      </Typography>
      <div className={classes.containerSalaries}>
        <BlockSkeleton isDisplayed={entityStore.isLoadingSalaries}>
          <Block
            borderRadius="16px"
            borderRadiusMobile="16px"
            mode="dark"
            padding="20px 24px"
            paddingMobile="20px 24px"
          >
            <Typography
              component="h3"
              variant="B1"
              variantMobile="B1"
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
            borderRadius="16px"
            borderRadiusMobile="16px"
            mode="dark"
            padding="20px 24px"
            paddingMobile="20px 24px"
          >
            <Typography
              component="h3"
              variant="B1"
              variantMobile="B1"
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
