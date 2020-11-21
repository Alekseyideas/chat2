import React from 'react';
import { IcoError } from '../components/svgs';
import { Button } from '../components/ui';

interface ErrorProps {
  onClickNext: () => void;
  uri: string;
}

export const Error: React.FC<ErrorProps> = ({ onClickNext, uri }) => {
  return (
    <div className='tda__questionResult tda__questionResult--error'>
      <IcoError />
      <h2>Помилка :(</h2>
      <div className='tda__screenBtnWrapper'>
        <a
          href={uri}
          target='_blank'
          rel='noreferrer'
          className='tda__btn tda__btn--blue tda__mr-3'
        >
          Підглянути відповідь
        </a>
        <Button onClick={onClickNext} />
      </div>
    </div>
  );
};
