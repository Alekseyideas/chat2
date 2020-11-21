export interface IModal {
  title: string;
  message: string;
  open?: boolean;
  callBack?: () => void;
}

export interface IUser {
  name: string;
  token1?: string;
  token2?: string;
  id: number;
  joined?: boolean;
}

export interface IMessage {
  text: string;
  userName: string;
  id: number;
  time: string;
  type_id?: number;
  mess_id?: string;
  comment: IComment;
}

export interface IComment {
  text: string;
  name: string;
}

export interface IState {
  user: IUser | null;
  pass: string;
  atoken: string;
  url: string;
  utoken: string;
  roomstatus: boolean;
  anket: boolean;
  test: boolean;
  diagram: boolean;
  gistogram: boolean;
  users: string[];
  modal: IModal;
  messages: IMessage[];
  page: 'login' | 'chat' | 'userForm';
  roomId: string;
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

export interface ISetNameAction {
  payload: string;
}

export interface IModalAction {
  payload: IModal;
}

export enum EActionTypes {
  SET_LOADING = 'SET_LOADING',
  SET_USER = 'SET_USER',
  SET_USERS = 'SET_USERS',
  OPEN_MODAL = 'OPEN_MODAL',
  CLOSE_MODAL = 'CLOSE_MODAL',
  RESET_MODAL = 'RESET_MODAL',
  SET_PAGE = 'SET_PAGE',
  SEND_MESSAGE = 'SEND_MESSAGE',
  SET_PASS = 'SET_PASS',
  SET_ATOKEN = 'SET_ATOKEN',
  SET_UTOKEN = 'SET_UTOKEN',
  SET_URL = 'SET_URL',
  SET_DATA = 'SET_DATA',
  SET_ROOMSTATUS = 'SET_ROOMSTATUS',
  RELOAD_DATA = 'RELOAD_DATA',
  SET_ROOM_ID = 'SET_ROOM_ID',
  SET_ANK = 'SET_ANK',
  SET_TEST = 'SET_TEST',
  SET_DIA = 'SET_DIA',
  SET_GIST = 'SET_GIST',
  CLEAR = 'CLEAR',
}
