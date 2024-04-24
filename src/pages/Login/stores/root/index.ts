import {
  applySnapshot, flow, getSnapshot, types,
} from 'mobx-state-tree';

import { StateStoreModel, stateStoreLoginPage } from 'Page/Login/stores/state';
import { FieldsStoreModel, fieldsStoreLoginPage } from 'Page/Login/stores/fields';
import { rootStoreLayoutComponent } from 'Component/Layout/stores/root';
import UserApi from 'Api/user';

let initialState = {};

export const RootStoreModel = types
  .model('Root', {
    fieldsStore: types.maybe(FieldsStoreModel),
    stateStore: types.maybe(StateStoreModel),
  })
  .actions(self => {
    function afterCreate() {
      initialState = getSnapshot(self);
    }

    function reset() {
      applySnapshot(self, initialState);
    }

    const login = flow(function* (redirectAfterLogin) {
      const {
        email,
        password,
      } = self.fieldsStore;

      if (!email || !password) {
        return;
      }

      self.stateStore.setIsLoading(true);

      const { errors, data } = yield UserApi.Login({
        email,
        password,
      });

      self.stateStore.setIsLoading(false);

      if (errors) {
        // TODO: сделать нормальную обработку ошибок
        self.stateStore.setError(errors.detail || 'Неизвестная ошибка');
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
  stateStore: stateStoreLoginPage,
});
