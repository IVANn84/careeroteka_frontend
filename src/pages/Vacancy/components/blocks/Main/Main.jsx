import React from 'react';
import accounting from 'accounting-big';

import { useStoreVacancyPage } from 'Page/Vacancy/stores';
import Block from 'Component/Block';
import Typography from 'Component/Typography';
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
    <Block>
      <Typography
        variant="B1"
        variantMobile="B2"
        component="p"
      >
        <TextSkeleton
          isDisplayed={entityStore.isLoading}
          height={54}
        >
          {entityStore.entity?.company}
        </TextSkeleton>
      </Typography>
      <Typography
        variant="H1"
        variantMobile="H1"
        component="h1"
        className={classes.name}
      >
        <TextSkeleton
          isDisplayed={entityStore.isLoading}
          height={54}
        >
          {entityStore.entity?.name}
        </TextSkeleton>
      </Typography>
      {salary && (
        <Typography
          variant="H5"
          variantMobile="H5"
          component="p"
          className={classes.salary}
        >
          <TextSkeleton
            isDisplayed={entityStore.isLoading}
            height={30}
          >
            {`${salaryString}${salary.currency.code}`}
          </TextSkeleton>
        </Typography>
      )}
      <div className={classes.tags}>
        <BlocksSkeleton isDisplayed={entityStore.isLoading}>
          {entityStore.tags.map(tag => (
            <Block
              key={tag}
              mode="dark"
              padding="8px"
              paddingMobile="8px"
              borderRadius="8px"
              borderRadiusMobile="8px"
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
