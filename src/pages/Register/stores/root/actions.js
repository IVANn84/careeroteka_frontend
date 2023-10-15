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

  clearErrors() {
    self.errors = {};
  },

  setErrors(key, value) {
    self.errors[key] = value;
  },

  validateFields() {
    const { email, password, confirmPassword } = self.fieldsStore;
    let isValid = true;

    if (!email) {
      self.setErrors('email', 'Почта обязательна');
      isValid = false;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      self.setErrors('email', 'Неверный формат почты');
      isValid = false;
    }

    if (!password) {
      self.setErrors('password', 'Пароль обязателен');
      isValid = false;
    } else if (password.length < 6) {
      self.setErrors('password', 'Пароль должен содержать не менее 6 символов');
      isValid = false;
    }

    if (!confirmPassword) {
      self.setErrors('confirmPassword', 'Введите повторный пароль');
      isValid = false;
    } else if (confirmPassword !== password) {
      self.setErrors('confirmPassword', 'Пароли должны совпадать');
      isValid = false;
    }

    return isValid;
  },

  signup: flow(function* (gotoLogin) {
    const { email, password, confirmPassword } = self.fieldsStore;

    if (!self.validateFields()) {
      return;
    }

    self.clearErrors();
    self.setIsLoading(true);

    const { errors } = yield UserApi.Register({
      email,
      password,
      confirmPassword,
    });

    self.setIsLoading(false);

    if (errors) {
      self.setError(errors.email || 'Неизвестная ошибка');
    }
    gotoLogin();
  }),
});
