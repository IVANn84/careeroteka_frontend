import {applySnapshot, flow, getParent} from 'mobx-state-tree';
import {objectDeepMerge} from 'Util/objectDeepMerge';

import SurveyApi from 'Api/survey';
import {debounce} from 'Util/debounce';
import ReviewApi from 'Api/review';

import {rootStoreLayoutComponent} from 'Component/Layout/stores/root';

const debouncedFetchAreas = debounce(self => getParent(self).areasStore.fetchAreas(), 300);
const debouncedFetchSkills = debounce(self => getParent(self).skillsStore.fetchSkills(), 300);

export default self => ({
    setIsLoading(value) {
        self.isLoading = value;
    },
    
    setIsEditData(value) {
        self.isEditData = value;
    },
    
    setStepData(step, field, value) {
        self.stepsData[step][field] = value;

        self.setErrors({
            [`step_${step}`]: {
                [field]: null,
            },
        });
    },
    
    setSupportAreaSearch(value) {
        self.supportData.areaSearch = value;
    
        debouncedFetchAreas(self);
    },
    
    setSupportSkillSearch(value) {
        self.supportData.skillSearch = value;
        
        debouncedFetchSkills(self);
    },
    
    clearSupportData() {
        self.supportData = {};
    },

    setErrors(errors) {
        self.errors = objectDeepMerge(self.errors, errors);
    },
    
    selectSkill(value) {
        const skills = self.stepsData[3];
        
        if (skills.some(({id}) => id === value.id)) {
            self.stepsData[3] = skills.filter(({id}) => id !== value.id);
        } else {
            self.stepsData[3] = [...self.stepsData[3], value];
        }

        this.setErrors({
            step_3: null,
        });
    },
    
    rateReviewType(reviewId, value) {
        self.stepsData[4] = self.stepsData[4].map(reviewType =>
            reviewType.id === reviewId
                ? {...reviewType, value}
                : reviewType,
        );

        this.setErrors({
            step_4: null,
        });
    },
    
    fetchStepData: flow(function * () {
        const step = getParent(self).step;
        
        self.setIsLoading(true);
        // Доступные критерии оценки
        const reviewTypes = step === 4
            ? yield ReviewApi.FetchTypesList().then(({data}) => data)
            : [];
        self.setIsLoading(false);
        
        if (step > 0) {
            if (rootStoreLayoutComponent.isAuth) {
                // Получаем с бэка
                self.setIsLoading(true);
                
                const {data} = yield SurveyApi.GetStep(1, `step_${step}`);
                
                if (step === 4) {
                    // Соединяем оценки профессии с существующими критериями оценки
                    // P.S. делаем по name, тк с бэка id не совпадает из-за различий модели, но в будущем желательно переделать
                    applySnapshot(self.stepsData[step], reviewTypes.map(reviewType => ({
                        ...reviewType,
                        value: data?.find(({name}) => name === reviewType.name)?.value || 0,
                    })));
                }
                
                if (data) {
                    self.setIsEditData(true);
                    if (step !== 4) {
                        applySnapshot(self.stepsData[step], data);
                    }
                } else {
                    self.setIsEditData(false);
                }
                
                self.setIsLoading(false);
            } else {
                // Получаем из localStorage
                const savedData = JSON.parse(localStorage.getItem('survey1StepsData')) || {};
                
                if (step === 4) {
                    applySnapshot(self.stepsData[step], reviewTypes.map(reviewType => ({
                        ...reviewType,
                        value: savedData[step]?.find(({name}) => name === reviewType.name)?.value || 0,
                    })));
                    return;
                }
                
                if (savedData[step]) {
                    self.setIsEditData(true);
                    applySnapshot(self.stepsData[step], savedData[step]);
                }
            }
        }
    }),
    
    saveStepData: flow(function * () {
        const step = getParent(self).step;
        const data = self.stepsData[step];
    
        if (step > 0) {
            if (rootStoreLayoutComponent.isAuth) {
                self.setIsLoading(true);
                
                // Сохраняем на бэке
                const {errors} = self.isEditData
                    ? yield SurveyApi.EditStep(1, `step_${step}`, data)
                    : yield SurveyApi.SaveStep(1, `step_${step}`, data);
                
                self.setIsLoading(false);
                
                if (errors) {
                    return false;
                }
            } else {
                // Сохраняем в localStorage
                const savedData = JSON.parse(localStorage.getItem('survey1StepsData')) || {};
                savedData[step] = data;
                localStorage.setItem('survey1StepsData', JSON.stringify(savedData));
            }
        }
        
        return true;
    }),
});