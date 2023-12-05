import React from 'react';

import Typography from 'Component/Typography';
import Icon from 'Component/Icon';

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
      <div
        className={classes.selectedTab}
        // onClick={() => ()}
        // onKeyDown={onEnter(() => ())}
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
          Вакансия
        </Typography>
      </div>

      <div
        // className={classes.selectedTab}
        // onClick={onTabClick(() => ())}
        // onKeyDown={onEnter(onTabClick(() => ()))}
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
          Компания
        </Typography>
      </div>

      <div
        // className={classes.selectedTab}
        // onClick={onTabClick(() => ())}
        // onKeyDown={onEnter(onTabClick(() => ()))}
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
          Контакты
        </Typography>
      </div>
    </div>
  );
}
