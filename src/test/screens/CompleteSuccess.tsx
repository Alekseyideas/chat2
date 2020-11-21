import React from 'react';
import { IconTrophy } from '../components/svgs';

interface CompleteSuccessProps {}

export const CompleteSuccess: React.FC<CompleteSuccessProps> = () => {
  return (
    <div className='tda__successScreen'>
      <IconTrophy />
      <h2>
        Вітаємо! Тест складено! <br /> Ви — на крок ближче до перемоги у конкурсі
      </h2>

      <a href='/' className='tda__btn'>
        На головну
      </a>
    </div>
  );
};
