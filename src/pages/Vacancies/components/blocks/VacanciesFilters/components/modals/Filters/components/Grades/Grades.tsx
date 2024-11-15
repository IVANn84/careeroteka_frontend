import React, { useCallback, useRef } from 'react';

import { Theme } from 'Theme/theme';
import { useStoreVacanciesPage } from 'Page/Vacancies/stores';
import { useDevice } from 'Hook/useDevice';
import Typography from 'Component/Typography';
import Dropdown from 'Component/Dropdown';

import Grade from './components/Grade';

const grades = [
  {
    value: 'no experience',
    name: 'Intern',
    color: Theme.grades.backgroundColor.intern,
    description:
      'стажёр, проходящий испытательный срок и\u00A0претендующий на\u00A0полноценную ставку в\u00A0организации, занимается простыми задачами под кураторством более опытного специалиста.',
  },
  {
    value: 'between 1 and 3 years',
    name: 'Junior',
    color: Theme.grades.backgroundColor.junior,
    description:
      'начинающий специалист, решающий простые и\u00A0зачастую рутинные задачи, под кураторством более опытного специалиста',
  },
  {
    value: 'between 3 and 6 years',
    name: 'Middle',
    color: Theme.grades.backgroundColor.middle,
    description:
      'специалист среднего уровня, который самостоятельно решает более сложные задачи, по\u00A0сравнению с\u00A0Junior, старшие коллеги только проверяют результат.',
  },
  {
    value: 'more than 6 years',
    name: 'Senior',
    color: Theme.grades.backgroundColor.senior,
    description:
      'старший специалист, самостоятельно решающий задачи, отвечающий за\u00A0результат, ведёт кураторство над Junior и\u00A0Middle-специалистами.',
  },
];

export default function Grades({ classes }) {
  const {
    filtersModalStore: {
      fieldsStore,
      fieldsStore: { filters },
      vacanciesStore,
    },
  } = useStoreVacanciesPage();
  const device = useDevice();

  const $container = useRef<HTMLDivElement>();

  const onClick = value => fieldsStore.setExperience(value);

  const onFilterChanged = useCallback(
    fn => value => {
      fn(value);
    },
    [],
  );

  return (
    <>
      <Typography
        className={classes.title}
        component="p"
        variant="H5"
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
      {['desktop', 'tablet'].includes(device) ? (
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
      ) : (
        <Dropdown
          checkIsSelected={({ value }) => filters.experience.includes(value)}
          isClearable
          isDisabled={vacanciesStore.isLoading}
          mode="light"
          onSelect={onFilterChanged(value => fieldsStore.setExperience(value?.value))}
          options={grades}
          placeholder="Выберите грейд"
          selectedValue={grades
            .filter(({ value }) => filters.experience.includes(value))
            .map(({ name }) => name)
            .join(', ')}
        />
      )}
    </>
  );
}
