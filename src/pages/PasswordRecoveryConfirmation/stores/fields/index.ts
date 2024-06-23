import { types } from 'mobx-state-tree';

import { entityStorePasswordRecoveryPage } from 'Page/PasswordRecovery/stores/entity';

export const FieldsStoreModel = types
  .model('Fields', {
    email: types.maybeNull(types.string),
  })
  .actions(self => {
    function setEmail(value) {
      self.email = value;
      entityStorePasswordRecoveryPage.setErrors('email', null);
    }

    return {
      setEmail,
    };
  });

export const fieldsStorePasswordRecoveryPage = FieldsStoreModel.create();
