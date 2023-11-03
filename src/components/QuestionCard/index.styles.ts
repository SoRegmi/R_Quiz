import styled from 'styled-components';
import { ButtonWrapperProps } from '../../types/quiz';

export const QuizCardWrapper = styled.div`
  background: #ebfeff;
  padding: 2rem;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  text-align: center;
  margin-bottom: 1.5rem;
`;

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.3s ease;
  width: 25%;
  margin: 0.25rem;
  :hover {
    opacity: 0.8;
  }

  button {
    cursor: pointer;
    user-select: none;
    font-size: 0.8rem;
    width: 100%;
    height: 150px;
    margin: 5px 0;
    border: none;
    background: ${({ correct, userClicked, theme }) =>
      correct
        ? `${theme.colors.greenSurface}`
        : !correct && userClicked
        ? `${theme.colors.orangeRed}`
        : `${theme.colors.americanSilver}`};
    color: ${({ theme, userClicked }) =>
      `${userClicked ? theme.colors.white : theme.colors.secondary}`};
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
    font-family: Poppins;
    font-size: 20.9px;
    font-style: normal;
    font-weight: 600;
    line-height: 85.6%;
  }
`;

export const QuestionWrapper = styled.div`
  height: 150px;
  width: 100%;
  padding: 1rem;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.primary};
`;

export const AnswerWrapper = styled.div`
  display: flex;
`;
