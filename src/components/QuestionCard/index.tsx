import React from 'react';
import {
  QuizCardWrapper,
  ButtonWrapper,
  QuestionWrapper,
  AnswerWrapper,
} from './index.styles';
import { QuestionProps } from '../../types/quiz';

const QuestionCard: React.FC<QuestionProps> = ({
  question,
  answers,
  callback,
  userAnswer,
}) => (
  <>
    <QuestionWrapper>
      <p dangerouslySetInnerHTML={{ __html: question }} />
    </QuestionWrapper>
    <QuizCardWrapper>
      <AnswerWrapper>
        {answers.map((answer) => (
          <ButtonWrapper
            key={answer}
            correct={userAnswer?.correctAnswer === answer}
            userClicked={userAnswer?.answer === answer}
          >
            <button
              disabled={userAnswer ? true : false}
              value={answer}
              onClick={callback}
            >
              <span dangerouslySetInnerHTML={{ __html: answer }} />
            </button>
          </ButtonWrapper>
        ))}
      </AnswerWrapper>
    </QuizCardWrapper>
  </>
);

export default QuestionCard;
