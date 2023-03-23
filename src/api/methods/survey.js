import {axiosWithConverter} from '../axiosWithConverter';

import Format from '../intercepters/format';
import RequireAuth from '../intercepters/requireAuth';

class SurveyApi {
    @RequireAuth
    @Format
    SaveStep(surveyId, step, params) {
        return axiosWithConverter.post(`/api/v1/survey/${surveyId}/${step}/`, params);
    }
    
    @RequireAuth
    @Format
    EditStep(surveyId, step, params) {
        return axiosWithConverter.put(`/api/v1/survey/${surveyId}/${step}/`, params);
    }
    
    @RequireAuth
    @Format
    GetStep(surveyId, step) {
        return axiosWithConverter.get(`/api/v1/survey/${surveyId}/${step}/`);
    }
    
    @RequireAuth
    @Format
    SaveSurveyAuth(surveyId, data) {
        return axiosWithConverter.put(`/api/v1/survey/${surveyId}/authorized_user/`, data);
    }
    
    @Format
    SaveSurveyAnonim(surveyId, data) {
        return axiosWithConverter.post(`/api/v1/survey/${surveyId}/anonim/`, data);
    }
    
    /**
     * @param {{search: string?}} params
     */
    @Format
    FetchSkillList(params) {
        return axiosWithConverter.get('/api/v1/survey_skills/', {params});
    }
}

export default new SurveyApi();