import {
  applySnapshot, flow, getSnapshot, types,
} from 'mobx-state-tree';

import { testEmail } from 'Util/testEmail';
import { FieldsStoreModel, fieldsStoreLoginPage } from 'Page/Login/stores/fields';
import { EntityStoreModel, entityStoreLoginPage } from 'Page/Login/stores/entity';
import { rootStoreLayoutComponent } from 'Component/Layout/stores/root';
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
      const { email, password } = self.fieldsStore;
      let isValid = true;

      if (!email) {
        entityStoreLoginPage.setErrors('email', 'Почта обязательна');
        isValid = false;
      } else if (!testEmail(email)) {
        entityStoreLoginPage.setErrors('email', 'Неверный формат почты');
        isValid = false;
      }

      if (!password) {
        entityStoreLoginPage.setErrors('password', 'Пароль обязателен');
        isValid = false;
      }

      return isValid;
    }

    const login = flow(function* (redirectAfterLogin) {
      const {
        email,
        password,
      } = self.fieldsStore;

      if (!validateFields()) {
        return;
      }

      entityStoreLoginPage.clearErrors();
      entityStoreLoginPage.setIsLoading(true);

      const { errors, data } = yield UserApi.Login({
        email,
        password,
      });

      entityStoreLoginPage.setIsLoading(false);

      if (errors) {
        // TODO: сделать нормальную обработку ошибок
        entityStoreLoginPage.setErrors('email', 'Неверная почта или пароль');
        entityStoreLoginPage.setErrors('password', 'Неверная почта или пароль');
      } else if (data) {
        localStorage.setItem('refresh', data.refresh);
        yield rootStoreLayoutComponent.fetchCurrentUser();
        redirectAfterLogin();
      }
    });

    return {
      afterCreate,
      reset,
      login,
    };
  });

export const rootStoreLoginPage = RootStoreModel.create({
  fieldsStore: fieldsStoreLoginPage,
  entityStore: entityStoreLoginPage,
});
