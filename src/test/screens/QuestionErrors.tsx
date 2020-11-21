import React from 'react';
import { Store } from '../store';
import { TAnswer, TQuestion } from '../store/types';

interface QuestionErrorsProps {}

interface TGroup {
  question: TQuestion;
  answer: TAnswer;
}

export const QuestionErrors: React.FC<QuestionErrorsProps> = () => {
  const { store } = React.useContext(Store);
  const [errors, setErrors] = React.useState<TGroup[]>([]);

  React.useEffect(() => {
    if (store.questions) {
      const filteredAnswers = store.answers.filter((itm) => !itm.answer.istrue);
      const storeQuestions: TGroup[] = [];
      store.questions.forEach((itm) => {
        filteredAnswers.forEach((innerItm) => {
          if (innerItm.question === itm.id) {
            return storeQuestions.push({
              answer: innerItm.answer,
              question: itm,
            });
          }
          return null;
        });
      });
      setErrors(storeQuestions);
      console.log('errors', storeQuestions);
    }
  }, [store]);
  return (
    <div className='tda__questionErrorScreen'>
      {errors.map((itm, index) => {
        return (
          <div key={itm.question.id}>
            <h4>
              {index + 1}. {itm.question.name}
            </h4>
            <ul>
              {itm.question.answers.map((answ) => {
                return (
                  <li key={answ.id} className={itm.answer.id === answ.id ? 'tda__error-list' : ''}>
                    {answ.name}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
      <a className='tda__btn' href='./'>
        На головну
      </a>
    </div>
  );
};
