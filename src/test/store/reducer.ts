import { IState, IAction, EActionTypes } from './types';

export default function reducer(state: IState, action: IAction): IState {
  switch (action.type) {
    case EActionTypes.SET_LOADING:
      return {
        ...state,
        loading: action.payload.loading,
      };
    case EActionTypes.SET_QUESTIONS:
      return {
        ...state,
        ...action.payload,
        loading: false,
      };
    case EActionTypes.SET_ANSWER:
      return {
        ...state,
        answers: [...state.answers, action.payload.answer],
      };

    default:
      return state;
  }
}
