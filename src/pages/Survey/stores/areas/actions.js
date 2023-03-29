import {flow, getParent} from 'mobx-state-tree';

import AreaApi from 'Api/area';

export default self => ({
    setIsLoading(value) {
        self.isLoading = value;
    },
    
    setValues(value) {
        self.values = value;
    },
    
    fetchAreas: flow(function * () {
        const search = getParent(self).stepsStore.supportData.areaSearch;
        
        self.setIsLoading(true);
    
        const {data, errors} = yield AreaApi.FetchList({search, limit: 11});
    
        if (errors) {
            //TODO: сделать нормальную обработку ошибок
        } else {
            self.setValues(data.results);
        }
        
        self.setIsLoading(false);
    }),
});