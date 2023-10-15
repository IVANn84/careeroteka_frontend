import React, { useRef } from 'react';

import { useStoreVacanciesPage } from 'Page/Vacancies/stores';
import Typography from 'Component/Typography';
import Divider from 'Component/Divider';

import Grade from './components/Grade';

const grades = [
  {
    id: 1,
    name: 'Intern',
    color: '#DD657B',
    description: 'Начинающий специалист, решающий простые и зачастую рутинные задачи, под кураторством более опытного специалиста',
  },
  {
    id: 2,
    name: 'Junior',
    color: '#F3CA46',
    description: 'Начинающий специалист, решающий простые и зачастую рутинные задачи, под кураторством более опытного специалиста',
  },
  {
    id: 3,
    name: 'Middle',
    color: '#7ADA2E',
    description: 'Начинающий специалист, решающий простые и зачастую рутинные задачи, под кураторством более опытного специалиста',
  },
  {
    id: 4,
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

  const onClick = id => fieldsStore.setGradesVacancy(id);

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
            key={grade.id}
            onClick={onClick}
            value={grade}
          />
        ))}
      </div>
      <Divider />
    </>
  );
}
