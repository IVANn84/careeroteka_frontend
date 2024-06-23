import {
  applySnapshot, flow, getSnapshot, types,
} from 'mobx-state-tree';

import { FieldsStoreModel, fieldsStorePasswordRecoveryPage } from 'Page/PasswordRecovery/stores/fields';
import { EntityStoreModel, entityStorePasswordRecoveryPage } from 'Page/PasswordRecovery/stores/entity';
import ResetPasswordApi from 'Api/passwordRecovery';

let initialState = {};

export const RootStoreModel = types
  .model('Root', {
    entityStore: types.maybe(EntityStoreModel),
    fieldsStore: types.maybe(FieldsStoreModel),
  })
  .actions(self => {
    function afterCreate() {
      initialState = getSnapshot(self);
    }

    function reset() {
      applySnapshot(self, initialState);
    }

    function validateFields() {
      const { email } = self.fieldsStore;
      let isValid = true;

      if (!email) {
        entityStorePasswordRecoveryPage.setErrors('email', 'Почта обязательна');
        isValid = false;
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
        entityStorePasswordRecoveryPage.setErrors('email', 'Неверный формат почты');
        isValid = false;
      }

      return isValid;
    }

    const recovery = flow(function* (redirectAfterRecovery) {
      const {
        email,
      } = self.fieldsStore;

      if (!validateFields()) {
        return;
      }

      entityStorePasswordRecoveryPage.clearErrors();
      entityStorePasswordRecoveryPage.setIsLoading(true);

      const { errors, data } = yield ResetPasswordApi.ResetPassword({
        email,
      });

      entityStorePasswordRecoveryPage.setIsLoading(false);

      if (errors) {
        // TODO: сделать нормальную обработку ошибок
        entityStorePasswordRecoveryPage.setErrors('email', 'Неверная почта');
      } else if (data) {
        redirectAfterRecovery();
      }
    });

    return {
      afterCreate,
      reset,
      recovery,
    };
  });

export const rootStorePasswordRecoveryPage = RootStoreModel.create({
  fieldsStore: fieldsStorePasswordRecoveryPage,
  entityStore: entityStorePasswordRecoveryPage,
});
