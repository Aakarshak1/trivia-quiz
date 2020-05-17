import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Loader from 'react-loader-spinner';

import Question from '../Questions/Question';
import Result from '../Result/Result';
import * as actions from '../../store/action/rootAction';

import { shuffle } from '../../Utility/shuffle';

const Gameboard = () => {
  const [gameEnd, setGameEnd] = useState(false);
  const questions = useSelector((state) => state.trivia.questions);
  const questionCount = useSelector((state) => state.trivia.questionCount);
  const dispatch = useDispatch();

  const nextQuestion = () => {
    dispatch(actions.nextQuestion());
  };

  const handleQuit = () => {
    setGameEnd(true);
    return <Result />;
  };
  const answer = (answers) => shuffle(answers);

  return (
    <div>
      {gameEnd ? (
        <Result questionCount={questionCount} />
      ) : questions.length > 0 ? (
        <Question
          questionCount={+questionCount}
          question={questions[0].Question}
          nextQuestion={nextQuestion}
          answers={answer(questions[0].answers)}
          correct_answer={questions[0].correct_answer}
          handleQuit={handleQuit}
          gameEnd={gameEnd}
        />
      ) : (
        <div>
          <Loader type="Oval" color="#C49A68" height={80} width={80} />
        </div>
      )}
    </div>
  );
};

export default Gameboard;
