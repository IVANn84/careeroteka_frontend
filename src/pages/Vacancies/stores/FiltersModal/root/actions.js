import { applySnapshot, getSnapshot } from 'mobx-state-tree';

let initialState = {};

export default self => ({
  afterCreate() {
    initialState = getSnapshot(self);
  },

  reset() {
    applySnapshot(self, initialState);
  },

  setIsFiltersChanged(value) {
    self.isFiltersChanged = value;
  },
});
