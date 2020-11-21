import React from 'react';
import styled from 'styled-components';
import { IconClose } from './svg/IconClose';
import { Button } from './ui';
import { Store } from '../store';
import StoreAction from '../store/StoreAction';

export const InfoModal = () => {
  const { store, dispatch } = React.useContext(Store);
  const { modal } = store;
  const { title, message, callBack } = modal;
  const Action = new StoreAction(dispatch);

  if (!modal.open) {
    return null;
  }

  const closeHandler = () => {
    Action.closeModal();
    if (callBack) callBack();
  };
  return (
    <InfoModalWrapperS onClick={closeHandler}>
      <InnerModalWrapperS onClick={closeHandler}>
        <ColoseBtnS>
          <IconClose />
        </ColoseBtnS>
        <TitleS>{title}</TitleS>
        <TextS>{message}</TextS>
        <Button
          onClick={closeHandler}
          title="Ok"
          style={{ maxWidth: '150px', margin: 'auto' }}
        />
      </InnerModalWrapperS>
    </InfoModalWrapperS>
  );
};

const InfoModalWrapperS = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
`;
const InnerModalWrapperS = styled.div`
  display: flex;
  width: 100%;
  padding: 20px;
  flex-direction: column;
  background: white;
  border-radius: 5px;
  max-width: 600px;
  max-height: 90vh;
  overflow: auto;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  position: relative;
  text-align: center;
`;

const TitleS = styled.h2`
  font-size: 30px;
  margin: 0;
`;
const TextS = styled.p`
  font-size: 16px;
`;
const ColoseBtnS = styled.button`
  background: none;
  border: 0;
  outline: 0;
  padding: 0;
  position: absolute;
  right: 10px;
  top: 10px;
  opacity: 0.7;

  svg {
    width: 14px;
    height: 14px;
    g {
      fill: #000;
    }
  }

  &:hover {
    opacity: 0.5;
  }
`;
