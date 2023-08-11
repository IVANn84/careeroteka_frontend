import React from 'react';

import Typography from 'Component/Typography';
import Icon from 'Component/Icon';

export default function Tabs({
  classes,
}) {
  return (
    <div className={classes.container}>
      <div className={classes.selectedTab}>
        <Icon
          name="searchPeopleInside"
          width={48}
          height={48}
        />
        <Typography
          variant="B2"
          variantMobile="B2"
        >
          Все вакансии
        </Typography>
      </div>
      <div>
        <Icon
          name="companyHouse"
          width={48}
          height={48}
        />
        <Typography
          variant="B2"
          variantMobile="B2"
        >
          Корпорации
        </Typography>
      </div>
      <div>
        <Icon
          name="rocket"
          width={48}
          height={48}
        />
        <Typography
          variant="B2"
          variantMobile="B2"
        >
          Стартапы
        </Typography>
      </div>
      <div>
        <Icon
          name="techScience"
          width={48}
          height={48}
        />
        <Typography
          variant="B2"
          variantMobile="B2"
        >
          Ed-tech Job
        </Typography>
      </div>
      <div>
        <Icon
          name="remote"
          width={48}
          height={48}
        />
        <Typography
          variant="B2"
          variantMobile="B2"
        >
          Удалёнка
        </Typography>
      </div>
      <div>
        <Icon
          name="cookie"
          width={48}
          height={48}
        />
        <Typography
          variant="B2"
          variantMobile="B2"
        >
          ДМС
        </Typography>
      </div>
      <div>
        <Icon
          name="worldBag"
          width={48}
          height={48}
        />
        <Typography
          variant="B2"
          variantMobile="B2"
        >
          Релокация
        </Typography>
      </div>
    </div>
  );
}
