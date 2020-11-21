import { IState, IAction, EActionTypes, IModal } from './types';

export const initialModalState: IModal = {
  title: '',
  message: '',
  open: false,
};

export default function reducer(state: IState, action: IAction): IState {
  switch (action.type) {
    case EActionTypes.SET_USER:
      return {
        ...state,
        user: {
          ...action.payload,
          joined: true,
        },
      };

    case EActionTypes.OPEN_MODAL:
      return {
        ...state,
        modal: action.payload,
      };

    case EActionTypes.CLOSE_MODAL:
      return {
        ...state,
        modal: initialModalState,
      };

    case EActionTypes.SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    case EActionTypes.SET_ROOMSTATUS:
      return {
        ...state,
        roomstatus: action.payload,
      };

    case EActionTypes.SET_USERS:
      return {
        ...state,
        users: [...state.users, action.payload],
      };

    case EActionTypes.SET_PAGE:
      return {
        ...state,
        page: action.payload,
      };

    case EActionTypes.SEND_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };

    case EActionTypes.SET_ATOKEN:
      return {
        ...state,
        atoken: action.payload,
      };

    case EActionTypes.SET_UTOKEN:
      return {
        ...state,
        utoken: action.payload,
      };

    case EActionTypes.SET_URL:
      return {
        ...state,
        url: action.payload,
      };

    case EActionTypes.SET_PASS:
      return {
        ...state,
        pass: action.payload,
      };

    case EActionTypes.SET_DATA:
      return {
        ...state,
        users: [...state.users, action.payload.users],
        messages: [...state.messages, ...action.payload.messages],
      };

    case EActionTypes.RELOAD_DATA:
      return {
        ...state,
        users: [action.payload.users],
        messages: [...action.payload.messages],
      };

    case EActionTypes.SET_ROOM_ID:
      return {
        ...state,
        roomId: action.payload,
      };
    case EActionTypes.SET_TEST:
      return {
        ...state,
        anket: false,
        test: true,
        diagram: false,
        gistogram: false,
      };
    case EActionTypes.SET_DIA:
      return {
        ...state,
        anket: false,
        test: false,
        diagram: true,
        gistogram: false,
      };
    case EActionTypes.SET_GIST:
      return {
        ...state,
        anket: false,
        test: false,
        diagram: false,
        gistogram: true,
      };
    case EActionTypes.SET_ANK:
      return {
        ...state,
        anket: true,
        test: false,
        diagram: false,
        gistogram: false,
      };
    case EActionTypes.CLEAR:
      return {
        ...state,
        anket: false,
        test: false,
        diagram: false,
        gistogram: false,
      };

    default:
      return state;
  }
}
