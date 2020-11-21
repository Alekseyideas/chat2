import React from 'react';

interface ButtonProps {
  onClick: () => void;
  classes?: string;
  title?: string;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  classes,
  disabled,
  title = 'Наступне запитання',
}) => {
  return (
    <button
      type='button'
      className={`tda__btn ${classes || ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
};
