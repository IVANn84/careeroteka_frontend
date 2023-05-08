import { getParent } from 'mobx-state-tree';

export default self => ({
  get filteredAreas() {
    const { area } = getParent(self).stepsStore.stepsData[2];
    return area
      ? self.values.filter(({ name }) => name !== area)
      : self.values;
  },
});
