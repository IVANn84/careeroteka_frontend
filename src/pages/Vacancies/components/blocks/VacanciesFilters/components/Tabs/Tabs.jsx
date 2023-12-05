import React from 'react';

import { onEnter } from 'Util/onEnter';
import { useStoreVacanciesPage } from 'Page/Vacancies/stores';
import Typography from 'Component/Typography';
import Icon from 'Component/Icon';

export default function Tabs({
  classes,
}) {
  const {
    filtersModalStore,
    filtersModalStore: {
      fieldsStore,
    },
    vacanciesStore,
  } = useStoreVacanciesPage();

  const onTabClick = fn => () => {
    if (!vacanciesStore.isLoading) {
      fn();
      vacanciesStore.fetchVacancies();
    }
  };

  return (
    <div className={`${classes.container} ${vacanciesStore.isLoading ? classes.loading : ''}`}>
      <div
        className={!filtersModalStore.isFiltersChanged
          ? classes.selectedTab
          : ''}
        onClick={() => !vacanciesStore.isLoading && fieldsStore.reset()}
        onKeyDown={onEnter(() => !vacanciesStore.isLoading && fieldsStore.reset())}
        role="button"
        tabIndex={0}
      >
        <Icon
          height={48}
          name="searchPeopleInside"
          width={48}
        />
        <Typography
          variant="B2"
          variantMobile="B2"
        >
          Все вакансии
        </Typography>
      </div>

      <div
        className={fieldsStore.companySize.includes('corporation')
          ? classes.selectedTab
          : ''}
        onClick={onTabClick(() => fieldsStore.setCompanySizeForTabs('corporation'))}
        onKeyDown={onEnter(onTabClick(() => fieldsStore.setCompanySizeForTabs('corporation')))}
        role="button"
        tabIndex={0}
      >
        <Icon
          height={48}
          name="companyHouse"
          width={48}
        />
        <Typography
          variant="B2"
          variantMobile="B2"
        >
          Корпорации
        </Typography>
      </div>

      <div
        className={fieldsStore.companySize.includes('startup')
          ? classes.selectedTab
          : ''}
        onClick={onTabClick(() => fieldsStore.setCompanySizeForTabs('startup'))}
        onKeyDown={onEnter(onTabClick(() => fieldsStore.setCompanySizeForTabs('startup')))}
        role="button"
        tabIndex={0}
      >
        <Icon
          height={48}
          name="rocket"
          width={48}
        />
        <Typography
          variant="B2"
          variantMobile="B2"
        >
          Стартапы
        </Typography>
      </div>

      <div
        className={fieldsStore.workFormat.includes('remote')
          ? classes.selectedTab
          : ''}
        onClick={onTabClick(() => fieldsStore.setWorkFormatForTabs('remote'))}
        onKeyDown={onEnter(onTabClick(() => fieldsStore.setWorkFormatForTabs('remote')))}
        role="button"
        tabIndex={0}
      >
        <Icon
          height={48}
          name="remote"
          width={48}
        />
        <Typography
          variant="B2"
          variantMobile="B2"
        >
          Удаленка
        </Typography>
      </div>

      {/* <div
      {/*  className={fieldsStore.hasInsurance */}
      {/*    ? classes.selectedTab */}
      {/*    : ''} */}
      {/*  onClick={onTabClick(fieldsStore.toggleHasInsurance)} */}
      {/*  onKeyDown={onEnter(onTabClick(fieldsStore.toggleHasInsurance))} */}
      {/*  role="button" */}
      {/*  tabIndex={0} */}
      {/* > */}
      {/*  <Icon */}
      {/*    height={48} */}
      {/*    name="cookie" */}
      {/*    width={48} */}
      {/*  /> */}
      {/*  <Typography */}
      {/*    variant="B2" */}
      {/*    variantMobile="B2" */}
      {/*  > */}
      {/*    ДМС */}
      {/*  </Typography> */}
      {/* </div> */}

      {/* <div */}
      {/*  className={fieldsStore.isRelocationRequired */}
      {/*    ? classes.selectedTab */}
      {/*    : ''} */}
      {/*  onClick={onTabClick(fieldsStore.toggleIsRelocationRequired)} */}
      {/*  onKeyDown={onEnter(onTabClick(fieldsStore.toggleIsRelocationRequired))} */}
      {/*  role="button" */}
      {/*  tabIndex={0} */}
      {/* > */}
      {/*  <Icon */}
      {/*    height={48} */}
      {/*    name="worldBag" */}
      {/*    width={48} */}
      {/*  /> */}
      {/*  <Typography */}
      {/*    variant="B2" */}
      {/*    variantMobile="B2" */}
      {/*  > */}
      {/*    Релокация */}
      {/*  </Typography> */}
      {/* </div> */}
    </div>
  );
}
