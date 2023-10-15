import { getRandomInt } from 'Util/getRandomInt';
import { timeout, wrapAnswer } from '../mockUtils';

export default {
  FetchList: (() => {
    let nextPage = 2;
    let id = 1;

    return async (params, hasError = false) => {
      // eslint-disable-next-line no-console
      console.log('VacancyApi', 'FetchList', params);

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

  FetchSimilarList: (() => {
    let id = 1;

    return async (params, hasError = false) => {
      // eslint-disable-next-line no-console
      console.log('VacancyApi', 'FetchSimilarList', params);

      await timeout(1000);

      const data = Array(5)
        .fill(null)
        .map(() => ({
          // eslint-disable-next-line no-plusplus
          id: id++,
          company: 'Lamoda',
          name: 'Младший специалист по организации съемок',
          city: 'Москва',
          salary: {
            minValue: getRandomInt(30000, 200000),
            currency: {
              code: 'RUR',
            },
          },
        }));

      return wrapAnswer(data, hasError);
    };
  })(),

  FetchById: (() => async (id, hasError = false) => {
    // eslint-disable-next-line no-console
    console.log('VacancyApi', 'FetchById', id);

    await timeout(1000);

    const data = {
      name: 'Стажер менеджер по маркетингу',
      salary: 50000,
      icon: 'https://free-png.ru/wp-content/uploads/2020/09/sberbank_3-01.png',
      tags: ['Москва', 'Гибрид', 'Официальное оформление', 'Стажировка'],
      description: '<p> Мы − команда в Ozon, которая занимается автоматизацией коммуникаций с пользователем. Мы разрабатываем чат-ботов и сервисы речевой аналитики, чтобы наши клиенты получали быстрые и качественные ответы на любые вопросы. Наши продукты интегрированы с различными внутренними сервисами Ozon, чтобы иметь всю необходимую информацию для общения. В работе мы используем современные технологии в области NLP и постоянно их улучшаем, а также пробуем что-то новое.</p><h2>Наш стек:</h2><ul> <li>Go, PostgreSQL.</li><li>Docker, k8s.</li><li>Kafka.</li><li>REST, gRPC.</li></ul><h2>Вам предстоит:</h2><ul> <li>Писать производительный и тестируемый код.</li><li>Проектировать взаимодействие микросервисов.</li><li>Предлагать и реализовать идеи по развитию проекта.</li></ul><h2>Мы ожидаем:</h2><ul> <li>Опыт коммерческой разработки от 3х лет.</li><li>Опыт разработки на Go от 1 года.</li><li>Знание SQL.</li><li>Умение и желание писать unit-тесты.</li><li>Будет плюсом опыт с Python.</li></ul><h2>Мы предлагаем:</h2><ul> <li>Динамичный и быстроразвивающийся бизнес, ресурсы, возможность сделать вместе лучший продукт на рынке e-commerce.</li><li>Свободу действий в принятии решений.</li><li>Достойный уровень заработной платы.</li><li>Профессиональную команду, которой мы гордимся.</li><li>Возможность развиваться вместе с нашим бизнесом.</li></ul>',
      contacts: {
        name: 'Пупок Пупкин',
        values: [
          {
            name: 'Telegram',
            contact: 'user_name',
          },
          {
            name: 'E-mail',
            contact: 'user_email@example.com',
          },
        ],
      },
      urls: [
        {
          name: 'hh.ru',
          url: 'https://hh.ru/',
          icon: 'https://i.hh.ru/logos/svg/hh.ru__min_.svg?v=11032019',
        },
        {
          name: 'Хабр карьера',
          url: 'https://hh.ru/career',
          icon: 'https://career.habr.com/images/favicons/favicon-32.png',
        },
      ],
    };

    return wrapAnswer(data, hasError);
  })(),

  FetchSalaryCostsByFilter: (() => async (params, hasError = false) => {
    // eslint-disable-next-line no-console
    console.log('VacancyApi', 'FetchSalaryCostsByFilter', params);

    await timeout(1000);

    const data = [
      {
        count: 56,
        salary: 40000,
      },
      {
        count: 98,
        salary: 80000,
      },
      {
        count: 123,
        salary: 120000,
      },
      {
        count: 125,
        salary: 160000,
      },
      {
        count: 103,
        salary: 200000,
      },
      {
        count: 105,
        salary: 240000,
      },
      {
        count: 69,
        salary: 280000,
      },
      {
        count: 41,
        salary: 320000,
      },
      {
        count: 25,
        salary: 360000,
      },
      {
        count: 13,
        salary: 400000,
      },
      {
        count: 12,
        salary: 440000,
      },
      {
        count: 12,
        salary: 480000,
      },
      {
        count: 4,
        salary: 520000,
      },
    ];

    return wrapAnswer(data, hasError);
  })(),
};
