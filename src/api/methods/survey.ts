import RequireAuth from '../intercepters/requireAuth';
import Format from '../intercepters/format';
import CheckToken from '../intercepters/checkToken';
import { axiosWithConverter } from '../axiosWithConverter';

class SurveyApi {
  @RequireAuth
  @CheckToken
  @Format
  EditStep(surveyId: number, step: string, params) {
    return axiosWithConverter.put(`/api/v1/survey/${surveyId}/${step}/`, params);
  }

  /**
   * @param {{search: string?}} params
   */
  @Format
  FetchSkillList(params) {
    return axiosWithConverter.get('/api/v1/survey_skills/', { params });
  }

  @RequireAuth
  @CheckToken
  @Format
  GetStep(surveyId: number, step: string) {
    return axiosWithConverter.get(`/api/v1/survey/${surveyId}/${step}/`);
  }

  @RequireAuth
  @CheckToken
  @Format
  SaveStep(surveyId: number, step: string, params) {
    return axiosWithConverter.post(`/api/v1/survey/${surveyId}/${step}/`, params);
  }

  @Format
  SaveSurveyAnonim(surveyId: number, data) {
    return axiosWithConverter.post(`/api/v1/survey/${surveyId}/anonim/`, data);
  }

  @RequireAuth
  @CheckToken
  @Format
  SaveSurveyAuth(surveyId: number, data) {
    return axiosWithConverter.put(`/api/v1/survey/${surveyId}/authorized_user/`, data);
  }
}

export default new SurveyApi();
