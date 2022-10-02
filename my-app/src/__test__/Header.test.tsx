import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import { Header } from '../components';

test('there is a navigation in Header', () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );

  const nav = screen.getByRole('navigation');
  expect(nav).toBeInTheDocument();
});

test('there is a logo element in Header', async () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );

  const logo = await screen.findByText(/RACOON digest/);
  expect(logo).toBeInTheDocument();
});

test('there is a Home element in Header', async () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );

  const element = await screen.findByText(/Home/);
  expect(element).toBeInTheDocument();
});

test('there is an About element in Header', async () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );

  const element = await screen.findByText(/About/);
  expect(element).toBeInTheDocument();
});
