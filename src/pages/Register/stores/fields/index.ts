import { types } from 'mobx-state-tree';

import { entityStoreRegisterPage } from 'Page/Register/stores/entity';

export const FieldsStoreModel = types
  .model('Fields', {
    email: types.maybeNull(types.string),
    password: types.maybeNull(types.string),
    confirmPassword: types.maybeNull(types.string),
  })
  .actions(self => {
    function setEmail(value: string) {
      self.email = value;
      entityStoreRegisterPage.setErrors('email', null);
    }

    function setPassword(value: string) {
      self.password = value;
      entityStoreRegisterPage.setErrors('password', null);
    }

    function setConfirmPassword(value: string) {
      self.confirmPassword = value;
      entityStoreRegisterPage.setErrors('confirmPassword', null);
    }

    return {
      setEmail,
      setPassword,
      setConfirmPassword,
    };
  });

export const fieldsStoreRegisterPage = FieldsStoreModel.create();
