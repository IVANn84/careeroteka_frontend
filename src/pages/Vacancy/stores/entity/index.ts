import { flow, types } from 'mobx-state-tree';

import VacancyApi from 'Api/vacancy';

const ContactModel = types
  .model('Contact', {
    name: types.maybeNull(types.string),
    type: types.maybeNull(types.string),
    data: types.maybeNull(types.string),
  });

const SalaryModel = types.model('Salary', {
  minValue: types.maybeNull(types.number),
  maxValue: types.maybeNull(types.number),
  currency: types.model('Currency', {
    code: types.string,
  }),
});

export const EntityModel = types
  .model('Entity', {
    id: types.maybeNull(types.number),
    name: types.maybeNull(types.string),
    salary: types.maybeNull(SalaryModel),
    contacts: types.optional(types.array(ContactModel), []),
    company: types.maybeNull(types.string),
    link: types.maybeNull(types.string),
    workFormat: types.maybeNull(types.string),
    employmentFormat: types.maybeNull(types.string),
    rawDescription: types.maybeNull(types.string),
    city: types.maybeNull(types.string),
  });

export const EntityStoreModel = types
  .model('EntityStore', {
    isLoading: types.optional(types.boolean, true),
    entity: types.optional(EntityModel, {}),
  })
  .actions(self => {
    function setIsLoading(value) {
      self.isLoading = value;
    }

    function setEntity(value) {
      self.entity = value;
    }

    const fetch = flow(function* (id) {
      setIsLoading(true);

      const vacancyId = +(self.entity.id || id);

      const { data, errors } = yield VacancyApi.FetchById(vacancyId);

      if (errors) {
        // TODO: сделать нормальную обработку ошибок
      } else if (data) {
        setEntity({
          ...data,
          id: vacancyId,
        });
      }

      setIsLoading(false);

      // vacanciesStoreVacancyPage.fetchVacancies();
    });

    return {
      setIsLoading,
      setEntity,
      fetch,
    };
  })
  .views(self => ({
    get tags() {
      const result = [];

      if (self.entity.city) {
        result.push(self.entity.city);
      }
      if (self.entity.workFormat) {
        result.push(self.entity.workFormat);
      }
      if (self.entity.employmentFormat) {
        result.push(self.entity.employmentFormat);
      }
      result.push('Вакансия');

      return result;
    },
  }));

export const entityStoreVacancyPage = EntityStoreModel.create();
