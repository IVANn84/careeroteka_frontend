import { types } from 'mobx-state-tree';

export const StateStoreModel = types
  .model('State', {
    isLoading: types.optional(types.boolean, false),
    isLoaded: types.optional(types.boolean, false),
    error: types.maybeNull(types.string),
  })
  .actions(self => {
    function setIsLoading(value) {
      self.isLoading = value;
    }

    function setError(value) {
      self.error = value;
    }

    return {
      setIsLoading,
      setError,
    };
  });

export const stateStoreLoginPage = StateStoreModel.create();
