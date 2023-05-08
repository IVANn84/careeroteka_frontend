import { flow } from 'mobx-state-tree';

import GradeApi from 'Api/grade';

export default self => ({
  setIsLoading(value) {
    self.isLoading = value;
  },

  setValues(value) {
    self.values = value;
  },

  fetchGrades: flow(function* () {
    self.setIsLoading(true);

    const { data, errors } = yield GradeApi.FetchList();

    if (errors) {
      // TODO: сделать нормальную обработку ошибок
    } else {
      self.setValues(data);
    }

    self.setIsLoading(false);
  }),
});
