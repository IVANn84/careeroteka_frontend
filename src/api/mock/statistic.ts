import { timeout, wrapAnswer } from '../mockUtils';

export default {
  FetchProfessionSalaries: (() => async (params, hasError = false) => {
    // eslint-disable-next-line no-console
    console.log('StatisticApi', 'FetchProfessionSalaries', params);

    await timeout(1000);

    const data = {
      inCapital: [
        {
          id: 1,
          salary: 120000,
          month: 'Май',
        },
        {
          id: 2,
          salary: 143000,
          month: 'Июнь',
        },
        {
          id: 3,
          salary: 178000,
          month: 'Июль',
        },
        {
          id: 4,
          salary: 200000,
          month: 'Август',
        },
      ],
      inRegion: [
        {
          id: 5,
          salary: 186000,
          month: 'Май',
        },
        {
          id: 6,
          salary: 174000,
          month: 'Июнь',
        },
        {
          id: 7,
          salary: 158000,
          month: 'Июль',
        },
        {
          id: 8,
          salary: 145000,
          month: 'Август',
        },
      ],
      percentInCapital: 4.5,
      percentInRegion: -8.2,
    };

    return wrapAnswer(data, hasError);
  })(),
};
