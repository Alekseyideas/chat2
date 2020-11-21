import React from 'react';
import './Circle.scss';

interface CircleProps {
  num: number;
  currentQuestion: number;
}

export const Circle: React.FC<CircleProps> = ({ num, currentQuestion }) => {
  return (
    <div className='progress-circle' id='circle' data-progress={num === Infinity ? 0 : num}>
      <span>{currentQuestion + 1}</span>
    </div>
  );
};
