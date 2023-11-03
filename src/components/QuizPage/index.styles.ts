import styled from 'styled-components';

export const PageWrapper = styled.div`
  width: 1260px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  text-align: center;
  padding-bottom: 1.5rem;
`;

export const ControlWrapper = styled.div`
  display: flex;
  padding: 0 0.75rem;
  gap: 1rem;
  justify-content: center;
  align-items: center;
`;

export const TotalQuestions = styled.p`
  color: ${({ theme }) => `${theme.colors.secondary} !important;`};
  font-size: 2.5rem;
  text-transform: uppercase;
  font-weight: 700;
`;
