import React from 'react';
import './App.scss';
import { Circle } from './components/Circle';
import { MessWrapper } from './components/MessWrapper';
import { Button } from './components/ui';
import { questions } from './data';
import { Store } from './store';
import StoreAction from './store/StoreAction';
import { TUserAnswer } from './store/types';

function TestApp() {
  const { store, dispatch } = React.useContext(Store);

  const [questionCount, setQuestionCount] = React.useState(3);

  const [loading, setLoading] = React.useState(true);

  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [currentAnswer, setCurrentAnswer] = React.useState<null | number>(null);

  React.useEffect(() => {
    if (!store.questions) {
      new StoreAction(dispatch).setQuestions({
        questions,
        isbad_text: '',
        isok_text: '',
        questionsCount: questions.length,
        demo: false,
      });
      setQuestionCount(questions.length);
      setLoading(false);
    }
  }, [store, dispatch]);

  const answerHandler = (data: TUserAnswer) => {
    if (currentQuestion < questionCount - 1) {
      const { answer } = data;
      new StoreAction(dispatch).setAnswer({ answer: data });
      setCurrentQuestion((ques) => ques + 1);
    }
  };

  if (loading) return <MessWrapper text='Зачекайте ...' />;

  if (store.questions) {
    return (
      <div>
        <div className='tda__wrapper'>
          <div className='tda__circleTextWrapper'>
            <Circle
              num={+((currentQuestion / questionCount) * 100).toFixed()}
              currentQuestion={currentQuestion}
            />
            <span>із {questionCount} запитань</span>
          </div>
          <div className='tda__testQWrapper'>
            <h5>{store && store.questions[currentQuestion].name}</h5>
            <ul>
              {store.questions[currentQuestion].answers.map((itm, index) => (
                <li
                  className={currentAnswer === index ? 'tda__active-itm' : ''}
                  key={itm.id}
                  onClick={() => setCurrentAnswer(index)}
                >
                  {itm.name}
                </li>
              ))}
            </ul>
            <Button
              disabled={currentAnswer === null}
              onClick={() => {
                if (store.questions && currentAnswer !== null)
                  answerHandler({
                    question: (store.questions && store.questions[currentQuestion].id) || 0,
                    answer: store.questions[currentQuestion].answers[currentAnswer],
                  });
                else {
                  console.log('store.questions', store.questions);
                  console.log('currentAnswer', currentAnswer);
                }
              }}
              title='Відповісти'
            />
          </div>
        </div>
      </div>
    );
  }

  return <MessWrapper text='нема питань' />;
}

export default TestApp;
