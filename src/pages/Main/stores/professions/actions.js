import {flow, getParent} from 'mobx-state-tree';

import ProfessionApi from 'Api/profession';

export default self => ({
    setIsLoading(value) {
        self.isLoading = value;
    },
    
    setIsLoadingNext(value) {
        self.isLoadingNext = value;
    },
    
    setValues(value) {
        self.values = value;
    },
    
    setNextPage(value) {
        self.nextPage = value;
    },
    
    fetchProfessions: flow(function * (isFetchNextPage) {
        if (isFetchNextPage) {
            self.setIsLoadingNext(true);
        } else {
            self.setIsLoading(true);
        }
        
        const {
            fieldsStore: {
                searchProfession,
                areaId,
            },
        } = getParent(self);
        
        const {data, errors} = yield ProfessionApi.FetchList({
            search: searchProfession,
            areas__id: areaId,
            page: isFetchNextPage
                ? self.nextPage
                : null,
        });
        
        if (errors) {
            //TODO: сделать нормальную обработку ошибок
        } else {
            self.setValues(isFetchNextPage
                ? [...self.values, ...data.results]
                : data.results);
            self.setNextPage(data.next);
        }
        
        if (isFetchNextPage) {
            self.setIsLoadingNext(false);
        } else {
            self.setIsLoading(false);
        }
    }),
});