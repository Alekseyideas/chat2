import React from 'react';
import { hot } from 'react-hot-loader/root';
import axios from 'axios';
import styled from 'styled-components';
import { useCookies } from 'react-cookie';

import './App.css';

import { Chat } from './components/Chat';
import { Login } from './components/Login';
import { UserForm } from './components/UserForm';
import { Store } from './store';
import { YouTubeBox } from './components/YouTubeBox';
import socket from './utils/socket';
import StoreAction from './store/StoreAction';
import { InfoModal } from './components/InfoModal';
import { BACKEND } from './utils/config';
import TestApp from './test/TestApp';
import { StoreProvider } from './test/store';
import { ChartDiagram } from './components/ChartDiagram';
import { ChartGistogram } from './components/ChartGistogram';

declare global {
  interface Window {
    socket: any;
  }
}

const App: React.FC = () => {
  const { store, dispatch } = React.useContext(Store);
  const Action = new StoreAction(dispatch);
  const [cookies, setCookie] = useCookies(['atoken', 'utoken']);

  const setUsers = (users: any) => {
    Action.setUsers(users);
  };

  const addMessage = (mes: any) => {
    //console.log("mes=", mes);
    Action.sendMessage(mes);
  };

  const reloadMessage = (data: any) => {
    //console.log("rdata",data);
    Action.reloadData(data);
  };

  React.useEffect(() => {
    const pathArray = window.location.pathname.split('/');
    const roomId = pathArray[pathArray.length - 1];
    if (roomId) {
      Action.setRoomId(roomId);
      if (cookies.atoken && cookies.utoken) {
        const obj = {
          roomId: roomId,
          userName: '',
          atoken: cookies.atoken,
          utoken: cookies.utoken,
          adtoken: cookies.utoken,
        };
        (async () => {
          const alogin = await axios.post(`${BACKEND}/checkuser/`, obj);
          if (alogin.data.result === 200) {
            Action.setAtoken(cookies.atoken);
            socket.emit('ROOM:JOIN', obj);
            Action.setUrl(alogin.data.url);

            const { data } = await axios.request({
              method: 'get',
              headers: {
                'X-ACCESS-TOKEN': cookies.utoken,
              },
              url: `${BACKEND}/rooms/${roomId}`,
            });
            //console.log(data);
            Action.setData(data);
            Action.setUser({
              id: new Date().getTime(),
              name: alogin.data.name,
            });
          }
        })();
      }
    } else {
      Action.openModal({
        title: 'Помилка',
        message: 'Кімнати для цього семінару не знайдено',
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    socket.on('ROOM:SET_USERS', setUsers);
    socket.on('ROOM:NEW_MESSAGE', addMessage);
    socket.on('ROOM:DELETE_MESSAGE', reloadMessage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  window.socket = socket;
  if (!store.roomId) return <InfoModal />;
  let body;
  switch (store.page) {
    case 'userForm':
      body = <UserForm />;
      break;
    default:
      body = <Login />;
      break;
  }

  if (store.anket) {
    body = (
      <WrapperS>
        <YouTubeBox url={store.url} cw={store.anket} />
        <StoreProvider>
          <TestApp />
        </StoreProvider>
      </WrapperS>
    );
  } else if (store.test) {
    body = (
      <WrapperS>
        <YouTubeBox url={store.url} cw={store.test} />
        <h1>test</h1>
      </WrapperS>
    );
  } else if (store.diagram) {
    body = (
      <WrapperS>
        <YouTubeBox url={store.url} cw={store.diagram} />
        <ChartDiagram />
      </WrapperS>
    );
  } else if (store.gistogram) {
    body = (
      <WrapperS>
        <YouTubeBox url={store.url} cw={store.gistogram} />
        <ChartGistogram />
      </WrapperS>
    );
  } else if (store.user?.joined) {
    //console.log("url", store.url);
    body = (
      <WrapperS>
        <YouTubeBox url={store.url} />
        <Chat />
      </WrapperS>
    );
  }

  if (store.roomstatus) {
    body = (
      <WrapperS>
        <YouTubeBox url={store.url} kind={1} />
      </WrapperS>
    );
  }

  return (
    <WrapperBodyS>
      <HeaderTestBtnsS>
        <button onClick={Action.setClear}>Cброс</button>
        <button onClick={Action.setAnk}>Анкета</button>
        <button onClick={Action.setAnk}>Тест</button>
        <button onClick={Action.setDia}>Диаграмма</button>
        <button onClick={Action.setGist}>Гистограмма</button>
      </HeaderTestBtnsS>
      {body}
    </WrapperBodyS>
  );
};

export default hot(App);

const WrapperBodyS = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 20px;
`;
const WrapperS = styled.div`
  display: flex;
  width: 100%;

  @media screen and (max-width: 991px) {
    flex-direction: column;
    & > div {
      width: 100%;
    }
  }
`;

export const HeaderTestBtnsS = styled.div`
  display: flex;
  padding: 5px 20px;
  background: rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  right: 0;
  button {
    margin: 5px;
  }
`;
