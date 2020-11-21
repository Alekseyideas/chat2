import { IAction, TQuestion, EActionTypes, IState, TUserAnswer } from './types';

export default class StoreAction {
  dispatch: IAction | any;
  constructor(dispatch: IAction | any) {
    this.dispatch = dispatch;
  }

  setLoading = (payload: { loading: boolean }) =>
    this.dispatch({
      type: EActionTypes.SET_LOADING,
      payload,
    });
  setQuestions = (payload: {
    questions: TQuestion[] | null;
    isbad_text: IState['isbad_text'];
    isok_text: IState['isok_text'];
    questionsCount: IState['questionsCount'];
    demo: IState['demo'];
  }) =>
    this.dispatch({
      type: EActionTypes.SET_QUESTIONS,
      payload,
    });

  setQuestionsCount = (payload: { count: number }) =>
    this.dispatch({
      type: EActionTypes.SET_QUESTIONS,
      payload,
    });
  setAnswer = (payload: { answer: TUserAnswer }) =>
    this.dispatch({
      type: EActionTypes.SET_ANSWER,
      payload,
    });
}
