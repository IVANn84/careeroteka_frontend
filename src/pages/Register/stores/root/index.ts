import {
  applySnapshot, flow, getSnapshot, types,
} from 'mobx-state-tree';

import { FieldsStoreModel, fieldsStoreRegisterPage } from 'Page/Register/stores/fields';
import { EntityStoreModel, entityStoreRegisterPage } from 'Page/Register/stores/entity';
import UserApi from 'Api/user';

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
      const { email, password, confirmPassword } = self.fieldsStore;
      let isValid = true;

      if (!email) {
        entityStoreRegisterPage.setErrors('email', 'Почта обязательна');
        isValid = false;
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
        entityStoreRegisterPage.setErrors('email', 'Неверный формат почты');
        isValid = false;
      }

      if (!password) {
        entityStoreRegisterPage.setErrors('password', 'Пароль обязателен');
        isValid = false;
      } else if (password.length < 6) {
        entityStoreRegisterPage.setErrors('password', 'Пароль должен содержать не менее 6 символов');
        isValid = false;
      }

      if (!confirmPassword) {
        entityStoreRegisterPage.setErrors('confirmPassword', 'Введите повторный пароль');
        isValid = false;
      } else if (confirmPassword !== password) {
        entityStoreRegisterPage.setErrors('confirmPassword', 'Пароли должны совпадать');
        isValid = false;
      }

      return isValid;
    }

    const signup = flow(function* (gotoLogin) {
      const { email, password, confirmPassword } = self.fieldsStore;

      if (!validateFields()) {
        return;
      }

      entityStoreRegisterPage.clearErrors();
      entityStoreRegisterPage.setIsLoading(true);

      yield UserApi.Register({
        email,
        password,
        confirmPassword,
      });

      entityStoreRegisterPage.setIsLoading(false);

      gotoLogin();
    });

    return {
      afterCreate,
      reset,
      validateFields,
      signup,
    };
  });

export const rootStoreRegisterPage = RootStoreModel.create({
  entityStore: entityStoreRegisterPage,
  fieldsStore: fieldsStoreRegisterPage,
});
