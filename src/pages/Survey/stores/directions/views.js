import {getParent} from 'mobx-state-tree';

export default self => ({
    get filteredDirections() {
        const direction = getParent(self).stepsStore.stepsData[2].direction;
        return direction
            ? self.values.filter(({name}) => name !== direction)
            : self.values;
    },
});