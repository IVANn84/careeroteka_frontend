import {
  applySnapshot, flow, getSnapshot, types,
} from 'mobx-state-tree';

import { testEmail } from 'Util/testEmail';
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

    function validateEmailField() {
      const { email } = self.fieldsStore;
      let isValid = true;

      if (!email) {
        entityStorePasswordRecoveryPage.setErrors('email', 'Почта обязательна');
        isValid = false;
      } else if (!testEmail(email)) {
        entityStorePasswordRecoveryPage.setErrors('email', 'Неверный формат почты');
        isValid = false;
      }

      return isValid;
    }

    function validateFields() {
      const { password, confirmPassword } = self.fieldsStore;
      let isValid = true;

      if (!password) {
        entityStorePasswordRecoveryPage.setErrors('password', 'Пароль обязателен');
        isValid = false;
      } else if (password.length < 6) {
        entityStorePasswordRecoveryPage.setErrors('password', 'Пароль должен содержать не менее 6 символов');
        isValid = false;
      }

      if (!confirmPassword) {
        entityStorePasswordRecoveryPage.setErrors('confirmPassword', 'Введите повторный пароль');
        isValid = false;
      } else if (confirmPassword !== password) {
        entityStorePasswordRecoveryPage.setErrors('confirmPassword', 'Пароли должны совпадать');
        isValid = false;
      }

      return isValid;
    }

    const recovery = flow(function* (redirectAfterRecovery) {
      const {
        email,
      } = self.fieldsStore;

      if (!validateEmailField()) {
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

    const resetPassword = flow(function* (uid, func) {
      const {
        password, confirmPassword,
      } = self.fieldsStore;

      if (!validateFields()) {
        return;
      }

      entityStorePasswordRecoveryPage.clearErrors();
      entityStorePasswordRecoveryPage.setIsLoading(true);

      const { errors, data } = yield ResetPasswordApi.ConfirmResetPassword(uid, {
        newPassword: password,
        confirmNewPassword: confirmPassword,
      });

      entityStorePasswordRecoveryPage.setIsLoading(false);

      if (errors) {
        // TODO: сделать нормальную обработку ошибок
        entityStorePasswordRecoveryPage.setErrors('confirmPassword', 'Ошибка изменения пароля. Попробуйте снова');
      } else if (data) {
        func(true);
      }
    });

    return {
      afterCreate,
      reset,
      recovery,
      resetPassword,
    };
  });

export const rootStorePasswordRecoveryPage = RootStoreModel.create({
  fieldsStore: fieldsStorePasswordRecoveryPage,
  entityStore: entityStorePasswordRecoveryPage,
});
