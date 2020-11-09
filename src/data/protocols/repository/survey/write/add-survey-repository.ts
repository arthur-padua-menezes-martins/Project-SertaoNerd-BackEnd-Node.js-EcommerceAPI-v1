import {
  IAddSurveyModel
} from '../../../../../domain/usecases/survey/write/add-survey'

export interface IAddSurveyRepository {
  add: (surveyData: IAddSurveyModel) => Promise<void>
}
