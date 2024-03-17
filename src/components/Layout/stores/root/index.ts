import {
  Instance, applySnapshot, flow, getSnapshot, types,
} from 'mobx-state-tree';

import UserApi from 'Api/user';

let initialState = {};

export const UserModel = types
  .model('User', {
    id: types.number,
    email: types.string,
    firstName: types.maybeNull(types.string),
    lastName: types.maybeNull(types.string),
    isOnboardingDone: types.boolean,
    isEmailConfirmed: types.optional(types.boolean, false),
  });

export type UserType = Instance<typeof UserModel>;

export const RootStoreModel = types
  .model('Root', {
    isLoading: types.optional(types.boolean, true),
    error: types.maybeNull(types.string),
    isAuth: types.optional(types.boolean, false),
    currentUser: types.maybeNull(UserModel),
  })
  .actions(self => {
    function afterCreate() {
      initialState = getSnapshot(self);
    }

    function reset() {
      applySnapshot(self, initialState);
    }

    function setIsLoading(value) {
      self.isLoading = value;
    }

    function setError(value) {
      self.error = value;
    }

    function setIsAuth(value) {
      self.isAuth = value;
    }

    function setCurrentUser(value) {
      self.currentUser = value;
    }

    const logout = flow(function* (after) {
      setIsLoading(true);

      const { errors } = yield UserApi.Logout();

      if (errors) {
        setError(errors.detail || 'Неизвестная ошибка');
      } else {
        setCurrentUser(null);
        setIsAuth(false);
        after();
      }

      setIsLoading(false);
    });

    const fetchCurrentUser = flow(function* () {
      setIsLoading(true);

      const { errors, data } = yield UserApi.FetchCurrent();

      if (errors) {
        // TODO: сделать нормальную обработку ошибок
        setError(errors.detail || 'Неизвестная ошибка');
      } else if (data) {
        setCurrentUser(data);
      }

      setIsAuth(!!data);
      setIsLoading(false);

      return !!errors;
    });

    return {
      afterCreate,
      reset,
      setIsLoading,
      setError,
      setIsAuth,
      setCurrentUser,
      logout,
      fetchCurrentUser,
    };
  });

export type RootStoreType = Instance<typeof RootStoreModel>;

export const rootStoreLayoutComponent = RootStoreModel.create();
