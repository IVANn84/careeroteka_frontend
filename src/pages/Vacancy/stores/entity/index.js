import { types } from 'mobx-state-tree';

import actions from './actions';

const ContactModel = types
  .model('Contact', {
    name: types.string,
    contact: types.string,
  });

const ContactsModel = types
  .model('Contacts', {
    name: types.maybeNull(types.string),
    values: types.optional(types.array(ContactModel), []),
  });

const UrlModel = types
  .model('Url', {
    name: types.string,
    url: types.string,
    icon: types.string,
  });

export const EntityModel = types
  .model('Entity', {
    id: types.maybeNull(types.number),
    name: types.maybeNull(types.string),
    salary: types.maybeNull(types.number),
    icon: types.maybeNull(types.string),
    tags: types.optional(types.array(types.string), []),
    description: types.maybeNull(types.string),
    contacts: types.optional(ContactsModel, {}),
    urls: types.optional(types.array(UrlModel), []),
  });

export const EntityStoreModel = types
  .model('EntityStore', {
    isLoading: types.optional(types.boolean, true),
    entity: types.optional(EntityModel, {}),
  })
  .actions(actions);

export const entityStoreVacancyPage = EntityStoreModel.create();
