import { types } from 'mobx-state-tree';

import { entityStorePasswordRecoveryPage } from 'Page/PasswordRecovery/stores/entity';

export const FieldsStoreModel = types
  .model('Fields', {
    email: types.maybeNull(types.string),
    password: types.maybeNull(types.string),
    confirmPassword: types.maybeNull(types.string),
  })
  .actions(self => {
    function setEmail(value) {
      self.email = value;
      entityStorePasswordRecoveryPage.setErrors('email', null);
    }

    function setPassword(value: string) {
      self.password = value;
      entityStorePasswordRecoveryPage.setErrors('password', null);
    }

    function setConfirmPassword(value: string) {
      self.confirmPassword = value;
      entityStorePasswordRecoveryPage.setErrors('confirmPassword', null);
    }

    return {
      setEmail,
      setPassword,
      setConfirmPassword,
    };
  });

export const fieldsStorePasswordRecoveryPage = FieldsStoreModel.create();
