import { applySnapshot, flow, getSnapshot } from 'mobx-state-tree';

import { rootStoreLayoutComponent } from 'Component/Layout/stores/root';
import UserApi from 'Api/user';

let initialState = {};

export default self => ({
  afterCreate() {
    initialState = getSnapshot(self);
  },

  reset() {
    applySnapshot(self, initialState);
  },

  setIsLoading(value) {
    self.isLoading = value;
  },

  setError(value) {
    self.error = value;
  },

  login: flow(function* (redirectAfterLogin) {
    const {
      email,
      password,
    } = self.fieldsStore;

    if (!email || !password) {
      return;
    }

    self.setIsLoading(true);

    const { errors, data } = yield UserApi.Login({
      email,
      password,
    });
    localStorage.setItem('refresh', data.refresh);

    self.setIsLoading(false);

    if (errors) {
      // TODO: сделать нормальную обработку ошибок
      self.setError(errors.detail || 'Неизвестная ошибка');
    } else {
      yield rootStoreLayoutComponent.fetchCurrentUser();
      redirectAfterLogin();
    }
  }),
});
