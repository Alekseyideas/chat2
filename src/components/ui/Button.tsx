import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../utils/colors';

interface Props {
  title: string;
  onClick?: () => void;
  onSubmit?: (e: React.FormEvent<HTMLButtonElement>) => void;
  style?: object;
  type?: 'button' | 'submit';
}

export const Button: React.FC<Props> = ({
  title,
  onClick = () => null,
  style,
  type = 'button',
  onSubmit,
}) => {
  return (
    <BtnS
      onClick={onClick}
      onSubmit={(e) => (onSubmit ? onSubmit(e) : null)}
      type={type}
      style={style}
    >
      {title}
    </BtnS>
  );
};

const BtnS = styled.button`
  display: block;
  width: 100%;
  background: rgba(0, 0, 0, 0.05);
  border: 1px solid ${COLORS.accent};
  box-sizing: border-box;
  height: 40px;
  outline: 0;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
  &:hover {
    background: ${COLORS.accent};
    color: #fff;
  }
`;
