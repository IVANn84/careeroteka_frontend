import { types } from 'mobx-state-tree';

import { professionsStoreMainPage } from 'Page/Main/stores/professions';

export const FieldsStoreModel = types
  .model('Fields', {
    searchProfession: types.maybeNull(types.string),
    areaId: types.maybeNull(types.number),
    areaName: types.optional(types.string, 'Все направления'),
  })
  .actions(self => {
    function setSearchProfession(value) {
      self.searchProfession = value;
    }

    function setArea({ id, name }) {
      const prevAreaId = self.areaId;

      self.areaId = id;
      self.areaName = name;

      if (prevAreaId !== id) {
        void professionsStoreMainPage.fetchProfessions(false);
      }
    }

    return {
      setSearchProfession,
      setArea,
    };
  });

export const fieldsStoreMainPage = FieldsStoreModel.create();
