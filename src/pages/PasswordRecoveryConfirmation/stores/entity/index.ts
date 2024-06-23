import { SnapshotOut, types } from 'mobx-state-tree';

const ErrorsModel = types
  .model('Errors', {
    email: types.maybeNull(types.string),
  });

export const EntityStoreModel = types
  .model('Entity', {
    isLoading: types.optional(types.boolean, false),
    errors: types.optional(ErrorsModel, {}),
  })
  .actions(self => {
    function setIsLoading(value) {
      self.isLoading = value;
    }

    function clearErrors() {
      self.errors = {
        email: null,
      };
    }

    function setErrors(key: keyof SnapshotOut<typeof ErrorsModel>, value: string | null) {
      self.errors[key] = value;
    }

    return {
      setIsLoading,
      clearErrors,
      setErrors,
    };
  });

export const entityStorePasswordRecoveryPage = EntityStoreModel.create();
