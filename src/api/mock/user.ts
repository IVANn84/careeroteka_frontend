import { timeout, wrapAnswer } from '../mockUtils';

export default {
  FetchCurrent: (() => async (hasError = false) => {
    // eslint-disable-next-line no-console
    console.log('UserApi', 'FetchCurrent');

    await timeout(1000);

    const data = {
      id: 1,
      username: 'alex',
      email: '',
      firstName: '',
      lastName: '',
    };

    return wrapAnswer(data, hasError);
  })(),
};
