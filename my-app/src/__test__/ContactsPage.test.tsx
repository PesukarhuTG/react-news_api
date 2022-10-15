import React from 'react';
import { render, screen } from '@testing-library/react';
//import { fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import { Contacts } from '../pages';

describe('Contacts page tests', () => {
  global.URL.createObjectURL = jest.fn();

  test('Contacts page render', () => {
    render(
      <BrowserRouter>
        <Contacts />
      </BrowserRouter>
    );

    const title = screen.getByText(/Contact us via form/i);
    expect(title).toBeInTheDocument();
  });

  test('Contacts page snapshot', () => {
    const page = render(
      <BrowserRouter>
        <Contacts />
      </BrowserRouter>
    );
    expect(page).toMatchSnapshot();
  });

  test('render Form on Contacts page', () => {
    render(
      <BrowserRouter>
        <Contacts />
      </BrowserRouter>
    );

    expect(screen.getByTestId('form')).toBeInTheDocument();
  });

  test('render without cards', () => {
    render(
      <BrowserRouter>
        <Contacts />
      </BrowserRouter>
    );

    const cardsElement = screen.queryByTestId('card-item');
    expect(cardsElement).toBeNull;
  });

  /*test('create and render 1 card', async () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Contacts />
      </BrowserRouter>
    );

    const inputName = getByTestId('input-fname');
    const inputDate = getByTestId('input-fdate');
    const inputSelect = getByTestId('input-fcity');
    const inputFile = getByTestId('input-file') as HTMLInputElement;
    const inputCheckbox = getByTestId('input-faccept') as HTMLInputElement;
    const submitButton = getByTestId('btn-submit');

    await waitFor(() => {
      inputName.focus();
      fireEvent.change(inputName, { target: { value: 'Tatiana' } });
      fireEvent.blur(inputName);

      inputDate.focus();
      fireEvent.change(inputDate, { target: { value: '1989-03-27' } });
      fireEvent.blur(inputDate);

      inputSelect.focus();
      fireEvent.change(inputSelect, {
        target: { value: 'Saint-Petersburg' },
      });
      fireEvent.blur(inputSelect);

      inputFile.focus();
      fireEvent.change(inputFile, {
        target: {
          files: [new File(['hello'], 'hello.png', { type: 'image/png' })],
        },
      });
      fireEvent.blur(inputFile);

      inputCheckbox.focus();
      fireEvent.click(inputCheckbox);
      fireEvent.blur(inputCheckbox);
    });

    expect(inputName).toHaveValue('Tatiana');

    await waitFor(() => fireEvent.click(submitButton));

    const text = screen.getByText(/Tatiana/i);
    expect(text).toBeInTheDocument();
    expect(screen.getByTestId('card-item')).toBeInTheDocument();
  });*/
});
