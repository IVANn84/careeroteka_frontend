import { types } from 'mobx-state-tree';

import actions from './actions';
import views from './views';

const ContactModel = types
  .model('Contact', {
    name: types.string,
    type: types.string,
    data: types.string,
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
  .actions(actions)
  .views(views);

export const entityStoreVacancyPage = EntityStoreModel.create();
