import {getParent} from 'mobx-state-tree';

export default self => ({
    get filteredSkills() {
        const skills = getParent(self).stepsStore.stepsData[3];
        return skills.length
            ? self.values.filter(({id}) => !skills.some(skill => skill.id === id))
            : self.values;
    },
});