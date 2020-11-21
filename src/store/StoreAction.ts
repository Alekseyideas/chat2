import { IAction, EActionTypes, IModal, IUser, IState, IMessage } from './types';

interface IData {
  users: IUser[];
  messages: IMessage[];
}
export default class StoreAction {
  dispatch: IAction | any;
  constructor(dispatch: IAction | any) {
    this.dispatch = dispatch;
  }

  public setUser = (payload: IUser) =>
    this.dispatch({
      type: EActionTypes.SET_USER,
      payload,
    });
  public setUsers = (payload: IUser[]) =>
    this.dispatch({
      type: EActionTypes.SET_USERS,
      payload,
    });

  public openModal = (payload: IModal) =>
    this.dispatch({
      type: EActionTypes.OPEN_MODAL,
      payload: { open: true, ...payload },
    });

  public closeModal = () =>
    this.dispatch({
      type: EActionTypes.CLOSE_MODAL,
    });

  public setRoomStatus = (payload: boolean) => {
    //console.log("pay:", payload);
    this.dispatch({
      type: EActionTypes.SET_ROOMSTATUS,
      payload,
    });
  };

  public setLoading = (payload: boolean) =>
    this.dispatch({
      type: EActionTypes.SET_LOADING,
      payload,
    });

  public setPage = (payload: IState['page']) =>
    this.dispatch({
      type: EActionTypes.SET_PAGE,
      payload,
    });
  public sendMessage = (payload: IMessage) =>
    this.dispatch({
      type: EActionTypes.SEND_MESSAGE,
      payload,
    });
  public setPass = (payload: string) =>
    this.dispatch({
      type: EActionTypes.SET_PASS,
      payload,
    });

  public setAtoken = (payload: string) =>
    this.dispatch({
      type: EActionTypes.SET_ATOKEN,
      payload,
    });

  public setUrl = (payload: string) =>
    this.dispatch({
      type: EActionTypes.SET_URL,
      payload,
    });

  public setUtoken = (payload: string) =>
    this.dispatch({
      type: EActionTypes.SET_UTOKEN,
      payload,
    });

  public setData = (payload: IData) =>
    this.dispatch({
      type: EActionTypes.SET_DATA,
      payload,
    });

  public reloadData = (payload: IData) =>
    this.dispatch({
      type: EActionTypes.RELOAD_DATA,
      payload,
    });

  public setRoomId = (payload: string) =>
    this.dispatch({
      type: EActionTypes.SET_ROOM_ID,
      payload,
    });

  setAnk = () =>
    this.dispatch({
      type: EActionTypes.SET_ANK,
    });

  setTest = () =>
    this.dispatch({
      type: EActionTypes.SET_TEST,
    });
  setDia = () =>
    this.dispatch({
      type: EActionTypes.SET_DIA,
    });

  setGist = () =>
    this.dispatch({
      type: EActionTypes.SET_GIST,
    });

  setClear = () =>
    this.dispatch({
      type: EActionTypes.CLEAR,
    });
}
