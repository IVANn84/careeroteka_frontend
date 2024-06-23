import { types } from 'mobx-state-tree';

import { entityStoreLoginPage } from 'Page/Login/stores/entity';

export const FieldsStoreModel = types
  .model('Fields', {
    email: types.maybeNull(types.string),
    password: types.maybeNull(types.string),
  })
  .actions(self => {
    function setEmail(value) {
      self.email = value;
      entityStoreLoginPage.setErrors('email', null);
    }

    function setPassword(value) {
      self.password = value;
      entityStoreLoginPage.setErrors('password', null);
    }

    return {
      setEmail,
      setPassword,
    };
  });

export const fieldsStoreLoginPage = FieldsStoreModel.create();
