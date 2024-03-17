import React from 'react';
import accounting from 'accounting-big';

import { useStoreVacancyPage } from 'Page/Vacancy/stores';
import Typography from 'Component/Typography';
import Block from 'Component/Block';

import TextSkeleton from './components/TextSkeleton';
import BlocksSkeleton from './components/BlocksSkeleton';

export default function Main({
  classes,
}) {
  const formatMoney = value => accounting.formatMoney(value, {
    symbol: '',
    precision: 0,
    thousand: ' ',
  });

  const {
    entityStore,
    entityStore: {
      entity: {
        salary,
      },
    },
  } = useStoreVacancyPage();

  let salaryString;

  if (salary) {
    if (salary.minValue !== salary.maxValue) {
      salaryString = `${salary.minValue
        ? `от ${formatMoney(salary.minValue)} `
        : ''} ${salary.maxValue
        ? `до ${formatMoney(salary.maxValue)} `
        : ''}`;
    } else {
      salaryString = `${formatMoney(salary.minValue ?? salary.maxValue)} `;
    }
  }

  return (
    <Block borderRadiusMobile={24} padding={[[36, 48]]} paddingMobile={[[24, 16]]}>
      <Typography
        component="p"
        variant="B1"
        variantMobile="B2"
      >
        <TextSkeleton
          height={54}
          isDisplayed={entityStore.isLoading}
        >
          {entityStore.entity?.company}
        </TextSkeleton>
      </Typography>
      <Typography
        className={classes.name}
        component="h1"
        variant="H1"
        variantMobile="H4"
      >
        <TextSkeleton
          height={54}
          isDisplayed={entityStore.isLoading}
        >
          {entityStore.entity?.name}
        </TextSkeleton>
      </Typography>
      {salary && (
        <Typography
          className={classes.salary}
          component="p"
          variant="H5"
          variantMobile="B1"
          weightMobile="semiBold"
        >
          <TextSkeleton
            height={30}
            isDisplayed={entityStore.isLoading}
          >
            {`${salaryString}${salary.currency.code}`}
          </TextSkeleton>
        </Typography>
      )}
      <div className={classes.tags}>
        <BlocksSkeleton isDisplayed={entityStore.isLoading}>
          {entityStore.tags.map(tag => (
            <Block
              borderRadius="8px"
              borderRadiusMobile="8px"
              className={classes.tag}
              key={tag}
              mode="dark"
              padding="8px"
              paddingMobile="8px"
            >
              <Typography
                variant="B2"
                variantMobile="B2"
              >
                {tag}
              </Typography>
            </Block>
          ))}
        </BlocksSkeleton>
      </div>
    </Block>
  );
}
