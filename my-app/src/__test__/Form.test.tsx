import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import { LoginForm } from '../components';

describe('Form tests', () => {
  test('render Form', () => {
    render(<LoginForm onSubmit={() => {}} />);
    expect(screen.getByTestId('form')).toBeInTheDocument();
  });

  test('render Form inputs on page', () => {
    render(<LoginForm onSubmit={() => {}} />);

    expect(screen.getByTestId('input-fname')).toBeInTheDocument();
    expect(screen.getByTestId('input-fdata')).toBeInTheDocument();
    expect(screen.getByTestId('input-fcity')).toBeInTheDocument();
    expect(screen.getByTestId('input-fgender-man')).toBeInTheDocument();
    expect(screen.getByTestId('input-fgender-woman')).toBeInTheDocument();
    expect(screen.getByTestId('input-file')).toBeInTheDocument();
    expect(screen.getByTestId('input-faccept')).toBeInTheDocument();
  });

  test('Form snapshot', () => {
    const form = render(<LoginForm onSubmit={() => {}} />);
    expect(form).toMatchSnapshot();
  });

  test('input name: check form value', () => {
    render(<LoginForm onSubmit={() => {}} />);

    type TestElement = Document | Element | Window | Node;

    function hasInputValue(e: TestElement, inputValue: string) {
      return screen.getByDisplayValue(inputValue) === e;
    }

    const inputName = screen.getByTestId('input-fname');
    fireEvent.change(inputName, { target: { value: 'Tatiana' } });
    expect(hasInputValue(inputName, 'Tatiana')).toBe(true);
  });

  /*test('input name: check form value', () => {
    render(<LoginForm onSubmit={() => {}} />);

    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
    userEvent.type(input, 'abc');
    expect(input).toHaveValue('abc');
  });*/

  test('input radio: check render', () => {
    render(<LoginForm onSubmit={() => {}} />);

    const input = screen.getAllByRole('radio') as HTMLInputElement[];
    expect(input[0]).toBeInTheDocument();
    expect(input[1]).toBeInTheDocument();
    expect(input[0].value).toBe('man');
    expect(input[1].value).toBe('woman');
  });

  /*test('input data: check render', () => {
    render(<LoginForm onSubmit={() => {}} />);
    const input = screen.getByTestId('input-fdata') as HTMLInputElement;
    expect(input).toBeInTheDocument();
    userEvent.type(input, '01-01-2022');
    expect(input.value).toBe('2022-01-01');
  });*/

  /*test('input file: check render', () => {
    render(<LoginForm onSubmit={() => {}} />);
    const input = screen.getByTestId('input-file') as HTMLInputElement;
    expect(input).toBeInTheDocument();

    const file = new File(['hello'], 'hello.png', { type: 'image/png' });
    userEvent.upload(input, file);
    expect(input.files!.item(0)).toStrictEqual(file);
    expect(input.files).toHaveLength(1);
  });*/

  /*test('input checkbox: check render', () => {
    render(<LoginForm onSubmit={() => {}} />);
    const input = screen.getByRole('checkbox') as HTMLInputElement;
    expect(input).toBeInTheDocument();
    userEvent.click(input);
    expect(input).toBeChecked();
    userEvent.click(input);
    expect(input).not.toBeChecked();
  });*/

  test('select: check render', () => {
    render(<LoginForm onSubmit={() => {}} />);
    const select = screen.getByRole('combobox') as HTMLSelectElement;
    const selectValue = screen.getByRole('option', {
      name: 'Voronezh',
    }) as HTMLOptionElement;
    expect(select).toBeInTheDocument();

    expect(screen.getAllByRole('option').length).toBe(6);
    userEvent.selectOptions(select, selectValue);
    expect(selectValue.selected).toBe(false);
  });

  test('render submit button', () => {
    render(<LoginForm onSubmit={() => {}} />);
    const button = screen.getByTestId('btn-submit');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('btn-submit');
    expect(button).toBeDisabled();
  });
});
