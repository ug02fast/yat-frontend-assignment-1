import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders collection page', () => {
  render(<App />);
  const linkElement = screen.getByText(/collection activity/i);
  expect(linkElement).toBeInTheDocument();
});
