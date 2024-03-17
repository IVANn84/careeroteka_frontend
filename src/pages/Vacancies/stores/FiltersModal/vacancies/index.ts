import { flow, types } from 'mobx-state-tree';

import { filtersModalFieldsStoreVacanciesPage } from 'Page/Vacancies/stores/FiltersModal/fields';
import VacanciesApi from 'Api/vacancy';

export const STEP_BAR = 40000;
export const MAX_BAR_SALARY = 500_000;

export const SalaryDataModel = types
  .model('SalaryData', {
    count: types.number,
    salary: types.number,
  });

export const FiltersModalVacanciesStoreModel = types
  .model('Vacancies', {
    isLoading: types.optional(types.boolean, true),
    vacancyList: types.optional(types.array(SalaryDataModel), []),
  })
  .actions(self => {
    function setIsLoading(value) {
      self.isLoading = value;
    }

    function setVacancyList(value) {
      self.vacancyList = value;
    }

    const fetchVacancyList = flow(function* () {
      setIsLoading(true);

      const { data, errors } = yield VacanciesApi.FetchSalaryCostsByFilter();

      if (errors) {
        // TODO: сделать нормальную обработку ошибок
      } else if (data) {
        setVacancyList(data);
      }

      if (!filtersModalFieldsStoreVacanciesPage.filters.maxSalary) {
        const maxSalary = Math.max(...self.vacancyList.map(vacancy => vacancy.salary));
        const finalMaxSalary = maxSalary > MAX_BAR_SALARY
          ? maxSalary
          : MAX_BAR_SALARY;
        filtersModalFieldsStoreVacanciesPage.setMaxSalary(finalMaxSalary);
      }

      setIsLoading(false);
    });

    return {
      setIsLoading,
      setVacancyList,
      fetchVacancyList,
    };
  })
  .views(self => {
    function maxSalary() {
      const max = Math.max(...self.vacancyList.map(vacancy => vacancy.salary));
      return max > MAX_BAR_SALARY
        ? max
        : MAX_BAR_SALARY;
    }

    function vacancyListDataChart() {
      const minValue = 0;
      const maxValue = maxSalary();

      const datasetLength = Math.ceil((maxValue - minValue) / STEP_BAR);
      const dataset: { label: number, data: number }[] = [];

      for (let index = 0; index < datasetLength; index += 1) {
        if (index === 0) {
          dataset.push({
            label: minValue + STEP_BAR,
            data: self.vacancyList
              .filter(value => value.salary >= minValue && value.salary < minValue + STEP_BAR)
              .length,
          });
        } else if (index === datasetLength - 1) {
          dataset.push({
            label: maxValue,
            data: self.vacancyList
              .filter(value => value.salary >= dataset[index - 1].label && value.salary <= maxValue)
              .length,
          });
        } else {
          dataset.push({
            label: dataset[index - 1].label + STEP_BAR,
            data: self.vacancyList
              .filter(value => value.salary >= dataset[index - 1].label
                && value.salary < dataset[index - 1].label + STEP_BAR)
              .length,
          });
        }
      }

      return {
        labels: dataset.map(({ label }) => label),
        datasets: [
          {
            data: dataset.map(({ data }) => data),
            categoryPercentage: 1,
            backgroundColor: '#86B0F8',
          },
        ],
      };
    }

    return {
      maxSalary,
      vacancyListDataChart,
    };
  });

export const filtersModalVacanciesStoreVacanciesPage = FiltersModalVacanciesStoreModel.create();
