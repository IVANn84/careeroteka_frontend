import { getParent } from 'mobx-state-tree';

export default self => ({
  get filteredAreas() {
    const selectedId = getParent(self).stepsStore.stepsData[2].id;
    return selectedId
      ? self.values.filter(({ id }) => id !== selectedId)
      : self.values;
  },
});
