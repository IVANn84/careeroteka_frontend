/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import { applySnapshot, flow, getSnapshot } from 'mobx-state-tree';

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

  setIsLoaded(value) {
    self.isLoaded = value;
  },

  setError(value) {
    self.error = value;
  },

  signup: flow(function* (func) {
    const { email, password, confirmPassword } = self.fieldsStore;

    if (!email || !password || !confirmPassword) {
      return;
    }

    self.setIsLoading(true);

    const { errors } = yield UserApi.Register({
      email,
      password,
      confirmPassword,
    });

    self.setIsLoading(false);
    func();

    if (errors) {
      self.setError(errors.email || 'Неизвестная ошибка');
      return Promise.reject(errors);
    }
  }),
});
