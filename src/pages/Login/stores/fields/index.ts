import { types } from 'mobx-state-tree';

import { stateStoreLoginPage } from 'Page/Login/stores/state';

export const FieldsStoreModel = types
  .model('Fields', {
    email: types.maybeNull(types.string),
    password: types.maybeNull(types.string),
  })
  .actions(self => {
    function setEmail(value) {
      self.email = value;
      stateStoreLoginPage.setError(null);
    }

    function setPassword(value) {
      self.password = value;
      stateStoreLoginPage.setError(null);
    }

    return {
      setEmail,
      setPassword,
    };
  });

export const fieldsStoreLoginPage = FieldsStoreModel.create();
