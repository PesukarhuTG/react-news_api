import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

test('render /home link', async () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  const linkElement = await screen.findByText(/home/i);
  expect(linkElement).toBeInTheDocument();
});

test('render /about link', async () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  const linkElement = await screen.findByText(/about/i);
  expect(linkElement).toBeInTheDocument();
});
