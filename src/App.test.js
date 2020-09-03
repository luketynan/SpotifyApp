import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
<<<<<<< HEAD
  // const linkElement = getByText(/learn react/i);
=======
  const linkElement = getByText(/ /i);
>>>>>>> bf953c867a1ce654b5fc3b9650887bbbdb7ade54
  expect(linkElement).toBeInTheDocument();
});
