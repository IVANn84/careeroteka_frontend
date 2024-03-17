import { flow, types } from 'mobx-state-tree';

import GradeApi from 'Api/grade';

const GradeModel = types.model('Grade', {
  id: types.number,
  name: types.string,
});

export const GradesStoreModel = types
  .model('Grades', {
    isLoading: types.optional(types.boolean, true),
    values: types.optional(types.array(GradeModel), []),
  })
  .actions(self => {
    function setIsLoading(value) {
      self.isLoading = value;
    }

    function setValues(value) {
      self.values = value;
    }

    const fetchGrades = flow(function* () {
      setIsLoading(true);

      const { data, errors } = yield GradeApi.FetchList();

      if (errors) {
        // TODO: сделать нормальную обработку ошибок
      } else if (data) {
        setValues(data);
      }

      setIsLoading(false);
    });

    return {
      setIsLoading,
      setValues,
      fetchGrades,
    };
  });

export const gradesStoreProfessionPage = GradesStoreModel.create();
