import React from 'react';
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';

import { useStoreVacanciesPage } from 'Page/Vacancies/stores';

import Input from 'Component/Input';
import Typography from 'Component/Typography';
import Button from 'Component/Button';
import Icon from 'Component/Icon';

export default function VacanciesFilters({
  classes,
}) {
  const {
    vacanciesStore,
    fieldsStore,
  } = useStoreVacanciesPage();

  return (
    <div className={classes.container}>
      <div className={classes.types}>
        <div>
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
            name="freelance"
            width={48}
            height={48}
          />
          <Typography
            variant="B2"
            variantMobile="B2"
          >
            Фриланс
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
        <div>
          <Icon
            name="graduate"
            width={48}
            height={48}
          />
          <Typography
            variant="B2"
            variantMobile="B2"
          >
            Стажировки
          </Typography>
        </div>
      </div>
      <div className={classes.controls}>
        <Input
          className={classes.searchButton}
          type="text"
          placeholder="Поиск вакансии"
          value={fieldsStore.searchVacancy}
          onChange={fieldsStore.setSearchVacancy}
          onSubmit={() => vacanciesStore.fetchVacancies(false)}
          onClear={() => vacanciesStore.fetchVacancies(false)}
          isClearable
          isSearchable
        />
        <Button
          variant="outlined"
          mode="dark"
        >
          <span className={classes.filtersButtonContent}>
            <AdjustmentsHorizontalIcon width={24} />
            Фильтры
          </span>
        </Button>
      </div>
    </div>
  );
}
