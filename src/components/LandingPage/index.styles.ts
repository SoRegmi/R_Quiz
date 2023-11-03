import styled from 'styled-components';
import { StartButtonProps } from '../../types/quiz';

export const StartButton = styled.button<StartButtonProps>`
  background: ${({ theme }) =>
    `linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.sunglow} 100%); `};
  box-shadow: ${({ theme }) =>
    `0px 18px 40px -12px ${theme.colors.flavescent}`};
  flex-shrink: 0;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.25rem;
  padding: 1rem 1.875rem;
  border: 1px solid;
  cursor: pointer;
  margin-left: ${({ disabled, page }) =>
    `${(disabled && page === 'quiz') || !disabled ? '' : '2rem'}`};

  &:hover {
    border: ${({ theme }) => `1px solid ${theme.colors.primary}`};
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.primary};
  }
  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray};
    border: ${({ theme }) => `1px solid ${theme.colors.primary}`};
    color: ${({ theme }) => theme.colors.spanishGray};
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const LandingTitle = styled.h1`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: xxx-large;
  margin-top: 0;
`;

export const LandingScoreCard = styled.p`
  color: ${({ theme }) => `${theme.colors.primary} !important;`};
  font-size: 2.5rem;
  text-transform: uppercase;
  font-weight: 700;
`;
