import React, { useRef } from 'react';

import { useStoreVacanciesPage } from 'Page/Vacancies/stores';
import Typography from 'Component/Typography';
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
    },
  } = useStoreVacanciesPage();

  const $container = useRef();

  const onClick = value => fieldsStore.setExperience(value);

  return (
    <>
      <Typography
        className={classes.title}
        component="p"
        variant="H4"
        variantMobile="H4"
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
  );
}
