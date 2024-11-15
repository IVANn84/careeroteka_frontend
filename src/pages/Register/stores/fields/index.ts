import { types } from 'mobx-state-tree';

import { entityStoreRegisterPage } from 'Page/Register/stores/entity';

export const FieldsStoreModel = types
  .model('Fields', {
    email: types.maybeNull(types.string),
    password: types.maybeNull(types.string),
    confirmPassword: types.maybeNull(types.string),
    courseId: types.maybeNull(types.number),
  })
  .actions(self => {
    function setEmail(value: string) {
      self.email = value;
      entityStoreRegisterPage.setErrors('email', null);
    }

    function setPassword(value: string) {
      self.password = value;
      entityStoreRegisterPage.setErrors('password', null);
    }

    function setConfirmPassword(value: string) {
      self.confirmPassword = value;
      entityStoreRegisterPage.setErrors('confirmPassword', null);
    }

    function setCourseId(value: number) {
      self.courseId = value;
    }

    return {
      setEmail,
      setPassword,
      setConfirmPassword,
      setCourseId,
    };
  });

export const fieldsStoreRegisterPage = FieldsStoreModel.create();
