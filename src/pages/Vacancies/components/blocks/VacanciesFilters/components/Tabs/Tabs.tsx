import React from 'react';

import { useStoreVacanciesPage } from 'Page/Vacancies/stores';
import Tab from 'Component/Tab';

export default function Tabs({
  classes,
}) {
  const {
    filtersModalStore: {
      fieldsStore,
      fieldsStore: { filters },
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
      <Tab
        iconName="searchPeopleInside"
        isActive={!fieldsStore.isFiltersChanged}
        onClick={onTabClick(() => fieldsStore.resetTabs())}
      >
        Все вакансии
      </Tab>
      {/* <Tab
        iconName="companyHouse"
        isActive={filters.companySize.includes('corporation')}
        onClick={onTabClick(() => fieldsStore.setCompanySizeForTabs('corporation'))}
      >
        Корпорации
      </Tab> */}
      {/* <Tab
        iconName="rocket"
        isActive={filters.companySize.includes('startup')}
        onClick={onTabClick(() => fieldsStore.setCompanySizeForTabs('startup'))}
      >
        Стартапы
      </Tab> */}
      <Tab
        iconName="remote"
        isActive={filters.workFormat.includes('remote')}
        onClick={onTabClick(() => fieldsStore.setWorkFormatForTabs('remote'))}
      >
        Удаленка
      </Tab>
      {/* <Tab
        iconName="cookie"
        isActive={filters.hasInsurance}
        onClick={onTabClick(fieldsStore.toggleHasInsurance)}
      >
        ДМС
      </Tab>
      <Tab
        iconName="worldBag"
        isActive={filters.isRelocationRequired}
        onClick={onTabClick(fieldsStore.toggleIsRelocationRequired)}
      >
        Релокация
      </Tab> */}
    </div>
  );
}
