import React, { useCallback, useRef } from 'react';

import { useStoreVacanciesPage } from 'Page/Vacancies/stores';
import { useDevice } from 'Hook/useDevice';
import Typography from 'Component/Typography';
import Dropdown from 'Component/Dropdown';
import Divider from 'Component/Divider';

import Grade from './components/Grade';

const grades = [
  {
    value: 'no_experience',
    name: 'Intern',
    color: '#DD657B',
    description: 'Начинающий специалист, решающий простые и зачастую рутинные задачи, под кураторством более опытного специалиста',
  },
  {
    value: 'from_one_to_three',
    name: 'Junior',
    color: '#F3CA46',
    description: 'Начинающий специалист, решающий простые и зачастую рутинные задачи, под кураторством более опытного специалиста',
  },
  {
    value: 'from_three_to_six',
    name: 'Middle',
    color: '#7ADA2E',
    description: 'Начинающий специалист, решающий простые и зачастую рутинные задачи, под кураторством более опытного специалиста',
  },
  {
    value: 'more_then_six',
    name: 'Senior',
    color: '#4861AB',
    description: 'Начинающий специалист, решающий простые и зачастую рутинные задачи, под кураторством более опытного специалиста',
  },
];

export default function Grades({
  classes,
}) {
  const {
    filtersModalStore: {
      fieldsStore,
      vacanciesStore,
    },
  } = useStoreVacanciesPage();
  const device = useDevice();

  const $container = useRef();

  const onClick = value => fieldsStore.setExperience(value);

  const onFilterChanged = useCallback(fn => value => {
    fn(value);
  }, []);

  return (
    <>
      <Typography
        className={classes.title}
        component="p"
        variant="H4"
        variantMobile="B1"
        weightMobile="semiBold"
      >
        Грейд
      </Typography>
      <Typography
        className={classes.description}
        component="p"
        variant="B1"
        variantMobile="B2"
      >
        Выберите необходимый грейд:
      </Typography>
      {device === 'desktop' ? (
        <>
          <div className={classes.variants} ref={$container}>
            {grades.map(grade => (
              <Grade
                $container={$container}
                key={grade.value}
                onClick={onClick}
                value={grade}
              />
            ))}
          </div>
          <Divider />
        </>
      ) : (
        <Dropdown
          checkIsSelected={({ value }) => fieldsStore.experience.includes(value)}
          isClearable
          isDisabled={vacanciesStore.isLoading}
          mode="light"
          onSelect={onFilterChanged(value => fieldsStore.setExperience(value?.value))}
          options={grades}
          placeholder="Выберите грейд"
          selectedValue={grades.filter(({ value }) => fieldsStore.experience.includes(value)).map(({ name }) => name).join(', ')}
        />
      )}
    </>
  );
}
