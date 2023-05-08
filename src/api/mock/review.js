import { timeout, wrapAnswer } from '../mockUtils';

export default {
  FetchList: (() => async (params, hasError = false) => {
    // eslint-disable-next-line no-console
    console.log('ReviewApi', 'FetchList', params);

    await timeout(1000);

    const data = [
      {
        id: 1,
        name: 'Work-life баланс',
        value: 3.4,
      },
      {
        id: 2,
        name: 'Карьерный рост',
        value: 5,
      },
      {
        id: 3,
        name: 'Уровень зарплаты',
        value: 4,
      },
      {
        id: 4,
        name: 'Переработки',
        value: 2,
      },
      {
        id: 5,
        name: 'Разнообразие задач',
        value: 0,
      },
    ];

    return wrapAnswer(data, hasError);
  })(),

  FetchTypesList: (() => async (hasError = false) => {
    // eslint-disable-next-line no-console
    console.log('ReviewApi', 'FetchTypesList');

    await timeout(1000);

    const data = [
      {
        id: 1,
        name: 'Work-life баланс',
        description: '- баланс, который необходим человеку между  работой и другими аспектами жизни.',
      },
      {
        id: 2,
        name: 'Карьерный рост',
        description: '- баланс, который необходим человеку между  работой и другими аспектами жизни.',
      },
      {
        id: 3,
        name: 'Уровень зарплаты',
        description: '- баланс, который необходим человеку между  работой и другими аспектами жизни.',
      },
      {
        id: 4,
        name: 'Переработки',
        description: '- баланс, который необходим человеку между  работой и другими аспектами жизни.',
      },
      {
        id: 5,
        name: 'Разнообразие задач',
        description: '- баланс, который необходим человеку между  работой и другими аспектами жизни.',
      },
    ];

    return wrapAnswer(data, hasError);
  })(),
};
