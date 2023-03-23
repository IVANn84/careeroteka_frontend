import {flow, getParent} from 'mobx-state-tree';

import DirectionApi from 'Api/direction';

export default self => ({
    setIsLoading(value) {
        self.isLoading = value;
    },
    
    setValues(value) {
        self.values = value;
    },
    
    fetchDirections: flow(function * () {
        const search = getParent(self).stepsStore.supportData.directionSearch;
        
        if (!search) {
            self.setValues([]);
            return;
        }
        
        self.setIsLoading(true);
    
        const {data, errors} = yield DirectionApi.FetchList({search});
    
        if (errors) {
            //TODO: сделать нормальную обработку ошибок
        } else {
            self.setValues(data);
        }
        
        self.setIsLoading(false);
    }),
});