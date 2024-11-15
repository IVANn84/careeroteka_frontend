import { timeout, wrapAnswer } from '../mockUtils';

export default {
  FetchList: (() => {
    let id = 1;

    return async (params, hasError = false) => {
      // eslint-disable-next-line no-console
      console.log('SkillApi', 'FetchList', params);

      await timeout(1000);

      const data = Array(11)
        .fill(null)
        .map(() => ({
          // eslint-disable-next-line no-plusplus
          id: id++,
          name: `Вариант ${id}`,
          value: 'A1',
        }));

      return wrapAnswer(data, hasError);
    };
  })(),
};
