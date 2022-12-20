import {flow} from 'mobx-state-tree';

import AreaApi from 'Api/area';

export default self => ({
    setIsLoading(value) {
        self.isLoading = value;
    },
    
    setValues(value) {
        self.values = value;
    },
    
    fetchAreas: flow(function * () {
        self.setIsLoading(true);
        
        const {data, errors} = yield AreaApi.FetchList();
        
        if (errors) {
            //TODO: сделать нормальную обработку ошибок
        } else {
            self.setValues([
                {
                    id: null,
                    name: 'Все направления',
                },
                ...data,
            ]);
        }
        
        self.setIsLoading(false);
    }),
});