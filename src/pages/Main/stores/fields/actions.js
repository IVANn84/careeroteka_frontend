import {getParent} from 'mobx-state-tree';

export default self => ({
    setSearchProfession(value) {
        self.searchProfession = value;
    },
    
    setArea({id, name}) {
        const prevAreaId = self.areaId;
        
        self.areaId = id;
        self.areaName = name;
        
        if (prevAreaId !== id) {
            getParent(self).professionsStore.fetchProfessions(false);
        }
    },
});