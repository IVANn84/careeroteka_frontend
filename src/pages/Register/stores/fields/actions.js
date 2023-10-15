import { getParent } from 'mobx-state-tree';

export default self => ({
  setEmail(value) {
    self.email = value;
    getParent(self).setErrors('email', null);
  },

  setPassword(value) {
    self.password = value;
    getParent(self).setErrors('password', null);
  },

  setConfirmPassword(value) {
    self.confirmPassword = value;
    getParent(self).setErrors('confirmPassword', null);
  },
});
