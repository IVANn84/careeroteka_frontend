import React from 'react';

import Tab from 'Component/Tab';

export default function Tabs({
  classes,
}) {
  // const onTabClick = fn => () => {
  //   if (!vacanciesStore.isLoading) {
  //     fn();
  //     vacanciesStore.fetchVacancies();
  //   }
  // };

  return (
    <div className={classes.container}>
      <Tab
        iconName="searchPeopleInside"
        // isActive={!filtersModalStore.isFiltersChanged}
        // onClick={() => ()}
      >
        Вакансия
      </Tab>
      <Tab
        iconName="companyHouse"
        // isActive={!filtersModalStore.isFiltersChanged}
        // onClick={() => ()}
      >
        Компания
      </Tab>
      <Tab
        iconName="rocket"
        // isActive={!filtersModalStore.isFiltersChanged}
        // onClick={() => ()}
      >
        Контакты
      </Tab>
    </div>
  );
}
