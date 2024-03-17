import { flow, types } from 'mobx-state-tree';

import VacanciesApi from 'Api/vacancy';

const AverageSalaryDataModel = types.model('AverageSalaryData', {
  vacancy: types.maybeNull(types.number),
  internship: types.maybeNull(types.number),
  freelance: types.maybeNull(types.number),
});

export const FiltersModalAverageSalaryStoreModel = types
  .model('AverageSalary', {
    isLoading: types.optional(types.boolean, true),
    averageSalaryData: types.optional(AverageSalaryDataModel, {}),
  })
  .actions(self => {
    function setIsLoading(value: boolean) {
      self.isLoading = value;
    }

    function setSalaryData(value) {
      self.averageSalaryData = value;
    }

    const fetchAverageSalary = flow(function* () {
      setIsLoading(true);

      const {
        data,
        errors,
      } = yield VacanciesApi.FetchAverageSalary();

      if (errors) {
        // TODO: сделать нормальную обработку ошибок
      } else if (data) {
        const salaryData = {
          freelance: data.byFreelance,
          internship: data.byInternship,
          vacancy: data.byVacancy,
        };

        setSalaryData(salaryData);
      }

      setIsLoading(false);
    });

    return {
      setIsLoading,
      setSalaryData,
      fetchAverageSalary,
    };
  });

export const filtersModalAverageSalaryStoreVacanciesPage = FiltersModalAverageSalaryStoreModel
  .create();
