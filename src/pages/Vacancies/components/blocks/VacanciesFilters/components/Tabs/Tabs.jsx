import React from 'react';

import { onEnter } from 'Util/onEnter';
import { useStoreVacanciesPage } from 'Page/Vacancies/stores';
import Typography from 'Component/Typography';
import Icon from 'Component/Icon';

const types = [
  {
    id: 1,
    icon: 'searchPeopleInside',
    name: 'Все вакансии',
  },
  {
    id: 2,
    icon: 'companyHouse',
    name: 'Корпорации',
  },
  {
    id: 3,
    icon: 'rocket',
    name: 'Стартапы',
  },
  {
    id: 4,
    icon: 'techScience',
    name: 'Ed-tech Job',
  },
  {
    id: 5,
    icon: 'remote',
    name: 'Удалёнка',
  },
  {
    id: 6,
    icon: 'cookie',
    name: 'ДМС',
  },
  {
    id: 7,
    icon: 'worldBag',
    name: 'Релокация',
  },
];

export default function Tabs({
  classes,
}) {
  const {
    vacanciesStore,
    fieldsStore,
  } = useStoreVacanciesPage();

  const onClick = id => {
    if (!vacanciesStore.isLoading) {
      fieldsStore.setTypeVacancy(id);
    }
  };

  return (
    <div className={`${classes.container} ${vacanciesStore.isLoading ? classes.loading : ''}`}>
      {
        types.map(type => (
          <div
            className={fieldsStore.typeVacancy === type.id
              ? classes.selectedTab
              : ''}
            key={type.id}
            onClick={() => onClick(type.id)}
            onKeyDown={onEnter(() => onClick(type.id))}
            role="button"
            tabIndex={0}
          >
            <Icon
              height={48}
              name={type.icon}
              width={48}
            />
            <Typography
              variant="B2"
              variantMobile="B2"
            >
              {type.name}
            </Typography>
          </div>
        ))
      }
    </div>
  );
}
