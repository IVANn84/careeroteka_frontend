import React from 'react';

import { useStoreVacanciesPage } from 'Page/Vacancies/stores';
import Tab from 'Component/Tab';

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
      <Tab
        iconName="searchPeopleInside"
        isActive={!filtersModalStore.isFiltersChanged}
        onClick={() => !vacanciesStore.isLoading && fieldsStore.reset()}
      >
        Все вакансии
      </Tab>
      <Tab
        iconName="companyHouse"
        isActive={fieldsStore.companySize.includes('corporation')}
        onClick={onTabClick(() => fieldsStore.setCompanySizeForTabs('corporation'))}
      >
        Корпорации
      </Tab>
      <Tab
        iconName="rocket"
        isActive={fieldsStore.companySize.includes('startup')}
        onClick={onTabClick(() => fieldsStore.setCompanySizeForTabs('startup'))}
      >
        Стартапы
      </Tab>
      <Tab
        iconName="remote"
        isActive={fieldsStore.workFormat.includes('remote')}
        onClick={onTabClick(() => fieldsStore.setWorkFormatForTabs('remote'))}
      >
        Удаленка
      </Tab>
      {/* <Tab
        iconName="cookie"
        isActive={fieldsStore.hasInsurance}
        onClick={onTabClick(fieldsStore.toggleHasInsurance)}
      >
        ДМС
      </Tab>
      <Tab
        iconName="worldBag"
        isActive={fieldsStore.isRelocationRequired}
        onClick={onTabClick(fieldsStore.toggleIsRelocationRequired)}
      >
        Релокация
      </Tab> */}
    </div>
  );
}
