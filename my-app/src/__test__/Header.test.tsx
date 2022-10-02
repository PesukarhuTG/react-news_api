import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import { Header } from '../components';

describe('Header tests', () => {
  test('pages', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    const homeLink = screen.getByTestId('mainpage-link');
    const aboutLink = screen.getByTestId('aboutpage-link');

    userEvent.click(homeLink);
    expect(screen.getByTestId('mainpage-link')).toBeInTheDocument();

    userEvent.click(aboutLink);
    expect(screen.getByTestId('aboutpage-link')).toBeInTheDocument();
  });

  test('there is a Navigation in Header', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    const nav = screen.getByRole('navigation');
    expect(nav).toBeInTheDocument();
  });

  test('there is a Logo element in Header', async () => {
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
});
