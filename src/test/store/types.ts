export interface TAnswer {
  id: number;
  name: string;
  istrue: boolean;
  question_id: number;
}

export interface TUserAnswer {
  question: TQuestion['id'];
  answer: TAnswer;
}
export interface TQuestion {
  answers: TAnswer[];
  id: number;
  name: string;
  url: string;
}
export interface IState {
  isbad_text: string;
  isok_text: string;
  demo: boolean;
  questions: TQuestion[] | null;
  questionsCount: number;
  answers: TUserAnswer[];
  readonly errors?: string | undefined;
  readonly loading: boolean;
}
export interface IAction {
  type: string;
  payload: any;
}
export interface IStore {
  store: IState;
  dispatch: IAction | any;
}

export enum EActionTypes {
  SET_QUESTIONS = 'SET_QUESTIONS',
  SET_QUESTIONS_COUNT = 'SET_QUESTIONS',

  SET_LOADING = 'SET_LOADING',

  SET_ANSWER = 'SET_ANSWER',

  OPEN_MODAL = 'OPEN_MODAL',
  CLOSE_MODAL = 'CLOSE_MODAL',
  RESET_MODAL = 'RESET_MODAL',
}
