import { timeout, wrapAnswer } from '../mockUtils';

export default {
  FetchList: (() => {
    let id = 1;

    return async (hasError = false) => {
      // eslint-disable-next-line no-console
      console.log('AreaApi', 'FetchList');

      await timeout(1000);

      const data = Array(10)
        .fill(null)
        .map(() => ({
          name: `Вариант ${id}`,
          // eslint-disable-next-line no-plusplus
          id: id++,
        }));

      return wrapAnswer(data, hasError);
    };
  })(),
};
