import { flow, types } from 'mobx-state-tree';

import { entityStoreVacancyPage } from 'Page/Vacancy/stores/entity';
import { VacancyModel } from 'Page/Vacancies/stores/vacancies';
import VacanciesApi from 'Mock/vacancy';

export const VacanciesStoreModel = types
  .model('Vacancies', {
    isLoading: types.optional(types.boolean, true),
    values: types.optional(types.array(VacancyModel), []),
  })
  .actions(self => {
    function setIsLoading(value) {
      self.isLoading = value;
    }

    function setValues(value) {
      self.values = value;
    }

    const fetchVacancies = flow(function* () {
      const { id } = entityStoreVacancyPage.entity;

      setIsLoading(true);

      const { data, errors } = yield VacanciesApi.FetchSimilarList(id);

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
      fetchVacancies,
    };
  });

export const vacanciesStoreVacancyPage = VacanciesStoreModel.create();
