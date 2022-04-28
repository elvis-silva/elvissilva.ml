import { render, screen } from '@testing-library/react';
import App from './App';

test('show header component in the document', () => {
  render(<App />);
  const headerComponent = screen.getByTestId('header')
  expect(headerComponent).toBeInTheDocument();
});
