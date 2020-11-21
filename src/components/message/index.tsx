import React from 'react';
import styled from 'styled-components';
import MCFR from '../../assets/images/mcfr.png';
import { IconPrev } from '../svg/IconPrev';

interface ICom {
  name: string;
  message: string;
}

interface Props {
  name: string;
  message: string;
  time: string;
  mcfr?: boolean;
  admin?: boolean;
  com?: ICom | null;
}
export const Message: React.FC<Props> = ({
  name,
  message,
  time,
  mcfr = false,
  admin = false,
  com,
}) => {
  const labels = name.split(' ');
  const fl = labels[0][0].toUpperCase();
  const sl = labels[1] && labels[1][0].toUpperCase();
  return (
    <WrapperS mcfr={mcfr} admin={admin}>
      <ImageS mcfr={mcfr}>
        {!mcfr ? (
          <>
            {fl}
            {sl}
          </>
        ) : null}
      </ImageS>
      <MessNameS>
        <UserNameS>
          {name}
          <span>{time}</span>
        </UserNameS>
        {com ? (
          <ComS>
            <IconPrev />
            <UserNameS>{com.name}</UserNameS>
            <MessageS dangerouslySetInnerHTML={{ __html: com.message }} />
          </ComS>
        ) : null}

        <MessageS dangerouslySetInnerHTML={{ __html: message }} />
      </MessNameS>
    </WrapperS>
  );
};

export const ImageS = styled.div<{ mcfr: boolean }>`
  width: 40px;
  height: 40px;
  min-width: 40px;
  min-height: 40px;
  border-radius: 50%;
  background: lightgray;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  color: white;

  ${({ mcfr }) =>
    mcfr
      ? `
		  background-repeat: no-repeat;
			background-size: 50%;
			background-position: center;
			background-color: #fff;
			border: 1px solid lightgray;
			background-image: url(${MCFR});

	`
      : null}
`;

export const WrapperS = styled.div<{ mcfr: boolean; admin: boolean }>`
  display: flex;
  padding: 5px 10px;
  margin-bottom: 20px;
  ${({ admin }) =>
    admin
      ? `
			${ImageS} {
				background-color: #7BC143;
			color: #fff;
	}
	p,
	span {
		color: #6F9F25
	}
	`
      : null}
  ${({ mcfr }) =>
    mcfr
      ? `
	p,
	span {
		color: #0183CC
	}
	`
      : null}
`;

export const MessNameS = styled.div``;
export const UserNameS = styled.span`
  display: flex;
  color: rgba(0, 0, 0, 0.7);
  font-size: 13px;
  align-items: flex-end;
  span {
    font-size: 11px;
    color: darkgray;
    margin-left: 10px;
  }
`;
export const MessageS = styled.p`
  display: block;
  word-break: break-word;  
  font-size: 13px;
  margin: 5px 0 0;
`;
export const ComS = styled.div`
  display: block;
  margin: 5px 20px 2px;
  position: relative;

  svg {
    position: absolute;
    right: 100%;
    top: 0;
    width: 10px;
    height: 10px;
    transform: rotate(0deg) scaleX(-1);
    margin-right: 6px;
  }
  span {
    color: rgba(0, 0, 0, 0.5);
  }
  p {
    color: rgba(0, 0, 0, 0.3);
    margin-top: 0;
  }
`;
