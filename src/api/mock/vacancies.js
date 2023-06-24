import { getRandomInt } from 'Util/getRandomInt';
import { timeout, wrapAnswer } from '../mockUtils';

export default {
  FetchList: (() => {
    let nextPage = 2;
    let id = 1;

    return async (params, hasError = false) => {
      // eslint-disable-next-line no-console
      console.log('VacanciesApi', 'FetchList', params);

      await timeout(1000);

      const data = {
        next: nextPage <= 5
          ? nextPage
          : null,
        results: Array(10)
          .fill(null)
          .map(() => ({
            // eslint-disable-next-line no-plusplus
            id: id++,
            company: 'Lamoda',
            name: 'Младший специалист по организации съемок',
            city: 'Москва',
            salary: getRandomInt(30000, 200000),
            isRead: id === 3,
            vacancyAggregators: [
              {
                id: 1,
                name: 'Habr',
                icon: 'https://career.habr.com/images/favicons/favicon-32.png',
              },
              {
                id: 2,
                name: 'hh',
                icon: 'https://i.hh.ru/logos/svg/hh.ru__min_.svg?v=11032019',
              },
              {
                id: 3,
                name: 'hh',
                icon: 'https://i.hh.ru/logos/svg/hh.ru__min_.svg?v=11032019',
              },
            ],
          })),
      };

      nextPage += 1;

      return wrapAnswer(data, hasError);
    };
  })(),

  FetchById: (() => async (id, hasError = false) => {
    // eslint-disable-next-line no-console
    console.log('ProfessionApi', 'FetchById', id);

    await timeout(1000);

    const data = {
      name: 'Python',
      description: 'Python — высокоуровневый язык программирования общего назначения, поддерживающий многопарадигменное программирование, интроспекцию, динамическую типизацию и автоматическое управление памятью. Python поддерживает структурное, объектно-ориентированное и функциональное программирование. Язык разработан Гвидо ван Россумом в конце 1980-х годов и назван в честь телесериала «Монтy Пайтон».',
      areas: ['Продуктовый менеджер', 'Программист'],
      image: 'https://www.python.org/static/community_logos/python-logo-master-v3-TM.png',
      color: {
        textColor: '#FFFFFF',
        backgroundColor: '#2d53ef',
        buttonColor: 'light',
      },
    };

    return wrapAnswer(data, hasError);
  })(),

  FetchByIdSalaries: (() => async (id, hasError = false) => {
    // eslint-disable-next-line no-console
    console.log('ProfessionApi', 'FetchByIdSalaries', id);

    await timeout(1000);

    const data = {
      inCapital: {
        minValue: 100000,
        maxValue: 200000,
      },
      inRegion: {
        minValue: 50000,
        maxValue: 100000,
      },
    };

    return wrapAnswer(data, hasError);
  })(),

  FetchByIdDirections: (() => {
    let directionId = 1;

    return async (id, hasError = false) => {
      // eslint-disable-next-line no-console
      console.log('ProfessionApi', 'FetchByIdDirections', id);

      await timeout(1000);

      const data = Array(10)
        .fill(null)
        .map(() => ({
          name: directionId === 3 ? 'Technical Product менеджер' : `Вариант ${directionId}`,
          description: `Описание варианта ${directionId}`,
          id: directionId,
        }));

      directionId += 1;

      return wrapAnswer(data, hasError);
    };
  })(),
};
