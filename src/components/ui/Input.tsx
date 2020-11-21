import React from 'react';
import styled from 'styled-components';

interface Props {
  name: string;
  value: string;
  errorText?: string;
  label?: string;
  wrapperStyles?: object;
  inputStyles?: object;
  type?: 'text' | 'password' | 'tel' | 'email';
  onChange: (
    e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLTextAreaElement>
  ) => void;
  onKeyPress?: (
    e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLTextAreaElement>
  ) => void;
}

export const Input: React.FC<Props> = ({
  name,
  value,
  onChange,
  onKeyPress,
  wrapperStyles,
  inputStyles,
  label,
  errorText,
  type = 'text',
}) => {
  return (
    <InputWrapperS style={wrapperStyles}>
      {label ? <LabelS htmlFor={name}>{label}</LabelS> : null}
      <InputS
        type={type}
        error={!!errorText}
        id={name}
        name={name}
        style={inputStyles}
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      {errorText ? <ErrorS>{errorText}</ErrorS> : null}
    </InputWrapperS>
  );
};

export const TextArea: React.FC<Props> = ({
  name,
  value,
  onChange,
  wrapperStyles,
  inputStyles,
  label,
  type = 'text',
}) => {
  return (
    <InputWrapperS style={wrapperStyles}>
      {label ? <LabelS htmlFor={name}>{label}</LabelS> : null}
      <TextAreaS
        id={name}
        name={name}
        style={inputStyles}
        value={value}
        onChange={onChange}
      />
    </InputWrapperS>
  );
};

export const InputWrapperS = styled.div`
  width: 100%;
  outline: 0;
  display: block;
  position: relative;
`;

export const InputS = styled.input<{ error: boolean }>`
  display: block;
  width: 100%;
  height: 40px;
  outline: 0;
  font-size: 14px;
  padding: 10px;
  border: 1px solid lightgray;
  box-sizing: border-box;
  border-radius: 5px;
  ${({ error }) =>
    error
      ? `
	  border: 1px solid red;
	`
      : null}
  &:focus {
    border-color: gray;
  }
`;
export const TextAreaS = styled.textarea`
  display: block;
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  height: 40px;
  outline: 0;
  font-size: 14px;
  padding: 10px;
  border: 1px solid lightgray;
  box-sizing: border-box;
  border-radius: 5px;

  &:focus {
    border-color: gray;
  }
`;
export const LabelS = styled.label`
  display: block;
  font-size: 13px;
  margin-bottom: 5px;
  color: grey;
`;
export const ErrorS = styled.span`
  color: red;
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 3px;
  font-size: 12px;
`;
