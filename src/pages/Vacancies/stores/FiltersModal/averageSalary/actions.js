import { flow } from 'mobx-state-tree';

import VacanciesApi from 'Api/vacancy';

export default self => ({
  setIsLoading(value) {
    self.isLoading = value;
  },

  setSalaryData(value) {
    self.averageSalaryData = value;
  },

  fetchAverageSalary: flow(function* () {
    self.setIsLoading(true);

    const {
      data: { byFreelance, byInternship, byVacancy },
      errors,
    } = yield VacanciesApi.FetchAverageSalary();

    if (errors) {
      // TODO: сделать нормальную обработку ошибок
    } else {
      const salaryData = {
        freelance: byFreelance,
        internship: byInternship,
        vacancy: byVacancy,
      };

      self.setSalaryData(salaryData);
    }

    self.setIsLoading(false);
  }),
});
