import React, { useState } from 'react';
import Logo from '../Logo';
import QuizPage from '../QuizPage';
import { AnswerObject, Difficulty, QuestionsState } from '../../types/quiz';
import { AppWrapper } from '../../App.styles';
import { LandingTitle, StartButton } from './index.styles';
import { TOTAL_QUESTIONS } from '../../constants';
import { fetchQuizQuestions } from '../../API';

const LandingPage: React.FC = () => {
  const [gameOver, setGameOver] = useState(true);
  const [loading, setLoading] = useState(false);
  const [number, setNumber] = useState(0);
  const [questions, setQuestions] = useState<QuestionsState[]>([]);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);
    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    );
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const checkAnswer = (e: any) => {
    if (!gameOver) {
      // User's answer
      const answer = e.currentTarget.value;
      // Check answer against correct answer
      const correct = questions[number].correct_answer === answer;
      // Add score if answer is correct
      if (correct) setScore((prev) => prev + 1);
      // Save the answer in the array for user answers
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };

  const nextQuestion = () => {
    // Move on to the next question if not the last question
    const nextQ = number + 1;

    if (nextQ === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQ);
    }
  };

  // toggle visibility of next question

  const showNextQuestion =
    !gameOver &&
    !loading &&
    userAnswers.length === number + 1 &&
    number !== TOTAL_QUESTIONS - 1;

  return (
    <>
      <AppWrapper>
        <Logo />
        {gameOver && (
          <LandingTitle>Increase your learning with each question</LandingTitle>
        )}
        {(gameOver || loading) && (
          <StartButton onClick={startTrivia} disabled={loading}>
            {loading ? 'Loading Questions...' : 'Start Solving'}
          </StartButton>
        )}
        {!loading && !gameOver && (
          <QuizPage
            answers={questions[number].answers}
            callback={checkAnswer}
            getNextQuestion={nextQuestion}
            question={questions[number].question}
            questionNr={number + 1}
            score={score}
            shouldRestartGame={userAnswers.length === TOTAL_QUESTIONS}
            showNextQuestion={showNextQuestion}
            startTrivia={startTrivia}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
          />
        )}
      </AppWrapper>
    </>
  );
};

export default LandingPage;
