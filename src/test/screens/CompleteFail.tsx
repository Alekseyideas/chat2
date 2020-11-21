import React from 'react';
import IconFail from '../images/depressed.svg';
import { Button } from '../components/ui';

interface CompleteFailProps {
  goToErrors: () => void;
  maxErrorsCount: number;
  isDemo?: boolean;
}

export const CompleteFail: React.FC<CompleteFailProps> = ({
  goToErrors,
  maxErrorsCount,
  isDemo,
}) => {
  return (
    <div className='tda__faildScreen'>
      <img src={IconFail} alt='IconFail' />
      <h2>
        Тест не складено. <br /> Не здавайтесь! <br />
      </h2>
      {isDemo ? (
        <p>
          Спробуйте скласти ще раз, або отримайте повний доступ до тренажера, <br /> щоб бути на
          крок ближче до перемоги у конкурсі.
        </p>
      ) : (
        <p>
          Ви зробили більше {maxErrorsCount} помилок. Почитайте книжку{' '}
          <a className='defLinkg' href='https://edirshkoly.mcfr.ua/book?bid=36434'>
            "Директор на всі 200"
          </a>
        </p>
      )}

      {isDemo ? (
        <div className='tda__screenBtnWrapper tda__mt-2'>
          <button type='button' id='retrndemo' className='tda__btn tda__mr-3'>
            Перескласти
          </button>
          <a href='https://edirshkoly.mcfr.ua/' className='tda__btn tda__btn--blue '>
            Повний доступ
          </a>
        </div>
      ) : (
        <div className='tda__screenBtnWrapper tda__mt-2'>
          <Button
            onClick={goToErrors}
            title='Переглянути помилки'
            classes='tda__btn--blue tda__mr-3'
          />
          <a href='/' className='tda__btn'>
            Перескласти
          </a>
        </div>
      )}
    </div>
  );
};
