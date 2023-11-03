import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

test('renders the landing page', () => {
  render(<App />);
  expect(screen.findAllByText('Increase your learning with each question'));
});
test('able to click on start solving quiz', () => {
  render(<App />);
  const button = screen.getByRole('button', { name: 'Start Solving' });
  userEvent.click(button);
});
