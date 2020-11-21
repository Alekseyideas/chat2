import React from 'react';
import { IState, IStore } from './types';
import reducer from './reducer';

const initialState: IState = {
  isbad_text: '',
  demo: true,
  isok_text: '',
  answers: [],
  questions: null,
  questionsCount: 0,
  loading: true,
};

export const Store = React.createContext<IStore>({
  store: initialState,
  dispatch: {
    type: '',
    payload: null,
  },
});

export function StoreProvider(props: any): JSX.Element {
  const [store, dispatch] = React.useReducer(reducer, initialState);
  return <Store.Provider value={{ store, dispatch }}>{props.children}</Store.Provider>;
}
