import {applySnapshot, flow, getSnapshot} from 'mobx-state-tree';

import SurveyApi from 'Api/survey';

import {rootStoreLayoutComponent} from 'Component/Layout/stores/root';

let initialState = {};

export default self => ({
    afterCreate() {
        initialState = getSnapshot(self);
    },
    
    reset() {
        applySnapshot(self, initialState);
    },
    
    setStep: flow(function * (value) {
        const isSaved = yield self.stepsStore.saveStepData();
        
        if (isSaved) {
            self.step = value;
            self.stepsStore.fetchStepData();
        }
    }),
    
    completeSurvey: flow(function * () {
        const data = {
            step_1: self.stepsStore.stepsData[1],
            step_2: self.stepsStore.stepsData[2],
            step_3: self.stepsStore.stepsData[3],
            step_4: self.stepsStore.stepsData[4],
        };
        
        const {errors} = yield rootStoreLayoutComponent.isAuth
            ? SurveyApi.SaveSurveyAuth(1, data)
            : SurveyApi.SaveSurveyAnonim(1, data);
        
        if (errors) {
            alert(
                Object.entries(errors)
                    .map(([keyStep, error]) => Object.entries(error).map(([keyField, text]) =>`${keyStep}: ${keyField}: ${text}`))
                    .join('\n')
            );
            self.stepsStore.setErrors(errors);
            return;
        }
        
        self.step = 5;
        localStorage.removeItem('survey1StepsData');
    }),
});