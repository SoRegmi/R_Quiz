import React from 'react';
import QuestionCard from '../QuestionCard';
import { ControlWrapper, PageWrapper, TotalQuestions } from './index.styles';
import { LandingScoreCard, StartButton } from '../LandingPage/index.styles';
import { TOTAL_QUESTIONS } from '../../constants';

const QuizPage: React.FC<any> = ({
  answers,
  callback,
  getNextQuestion,
  question,
  questionNr,
  score,
  shouldRestartGame,
  showNextQuestion,
  startTrivia,
  userAnswer,
}) => {
  return (
    <PageWrapper>
      <QuestionCard
        questionNr={questionNr}
        totalQuestions={TOTAL_QUESTIONS}
        question={question}
        answers={answers}
        userAnswer={userAnswer}
        callback={callback}
      />
      <ControlWrapper>
        <LandingScoreCard>Your Score: {score}</LandingScoreCard>

        <StartButton
          onClick={shouldRestartGame ? startTrivia : getNextQuestion}
          disabled={!showNextQuestion && !shouldRestartGame}
          page='quiz'
        >
          {shouldRestartGame ? 'Restart Solving' : 'Next Question'}
        </StartButton>
        <TotalQuestions>
          Question: {questionNr} / {TOTAL_QUESTIONS}
        </TotalQuestions>
      </ControlWrapper>
    </PageWrapper>
  );
};

export default QuizPage;
