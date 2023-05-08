import { timeout, wrapAnswer } from '../mockUtils';

export default {
  FetchList: (() => {
    let id = 0;

    return async (params, hasError = false) => {
      // eslint-disable-next-line no-console
      console.log('DirectionApi', 'FetchList', params);

      await timeout(1000);

      const data = Array(7)
        .fill(null)
        .map(() => ({
          id,
          name: `Вариант ${id}`,
        }));

      id += 1;

      return wrapAnswer(data, hasError);
    };
  })(),
};
