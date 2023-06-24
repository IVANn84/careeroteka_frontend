import { timeout, wrapAnswer } from '../mockUtils';

export default {
  FetchSkillList: (() => {
    let id = 0;

    return async (params, hasError = false) => {
      // eslint-disable-next-line no-console
      console.log('SurveyApi', 'FetchSkillList', params);

      await timeout(1000);

      const data = Array(7)
        .fill(null)
        .map(() => ({
          // eslint-disable-next-line no-plusplus
          id: id++,
          name: `Вариант ${id}`,
        }));

      return wrapAnswer(data, hasError);
    };
  })(),
};
