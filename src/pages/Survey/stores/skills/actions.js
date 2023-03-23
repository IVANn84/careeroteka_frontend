import {flow, getParent} from 'mobx-state-tree';

import SurveyApi from 'Api/survey';

export default self => ({
    setIsLoading(value) {
        self.isLoading = value;
    },
    
    setValues(value) {
        self.values = value;
    },
    
    fetchSkills: flow(function * () {
        const search = getParent(self).stepsStore.supportData.skillSearch;
        
        if (!search) {
            self.setValues([]);
            return;
        }
        
        self.setIsLoading(true);
    
        const {data, errors} = yield SurveyApi.FetchSkillList({search});
    
        if (errors) {
            //TODO: сделать нормальную обработку ошибок
        } else {
            self.setValues(data);
        }
        
        self.setIsLoading(false);
    }),
});