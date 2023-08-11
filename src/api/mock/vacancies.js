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

  FetchSalaryCostsByFilter: (() => async (params, hasError = false) => {
    // eslint-disable-next-line no-console
    console.log('VacanciesApi', 'FetchSalaryCostsByFilter', params);

    await timeout(1000);

    const data = [
      50000, 100000, 200000, 300000, 400000,
      20000, 300203, 123333, 123333, 123333,
      123333, 123333, 123333, 123333, 123333,
      123333, 123333, 123333, 123333, 123333, 124000,
      100000, 200000, 300000, 400000, 500000,
      100000, 200000, 300000, 400000, 500000,
      100000, 200000, 300000, 400000, 500000, 539999, 19999,
    ];

    return wrapAnswer(data, hasError);
  })(),
};
