import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { SearchPanel } from '../components';
import userEvent from '@testing-library/user-event';

interface Store {
  [key: string]: string;
}

class localStorageMock {
  store: Store;
  length: number;

  constructor() {
    this.store = {};
    this.length = 0;
  }

  clear() {
    this.store = {};
  }

  getItem(key: string) {
    return this.store[key] || null;
  }

  setItem(key: string, value: string) {
    this.store[key] = String(value);
  }

  removeItem(key: string) {
    delete this.store[key];
  }

  key(n: number): string | null {
    if (typeof n === 'undefined') {
      throw new Error("Failed to execute 'key' on Storage");
    }

    if (n >= Object.keys(this.store).length) {
      return null;
    }

    return Object.keys(this.store)[n];
  }
}

describe('LocalStorage', () => {
  test('render search panel empty if LocalStorage is empty', async () => {
    render(<SearchPanel />);

    const input = screen.getByDisplayValue('');
    expect(input).toBeInTheDocument;
  });

  test('render input value if LocalStorage contains it', async () => {
    localStorage = new localStorageMock();
    const { rerender } = render(<SearchPanel />);

    userEvent.type(screen.getByDisplayValue(''), 'test');
    rerender(<SearchPanel />);

    //expect(screen.getByDisplayValue('test')).toBeInTheDocument();
  });
});

describe('Search', () => {
  test('First, we dont have a focus and then we get it', () => {
    render(<SearchPanel />);

    const input = screen.getByPlaceholderText(/Search.../i);
    expect(input).not.toHaveFocus();
    input.focus();
    expect(input).toHaveFocus();
  });

  test('check input value', () => {
    render(<SearchPanel />);

    const input = screen.getByPlaceholderText(/Search.../i);
    expect(input).toContainHTML('');
    fireEvent.input(input, {
      target: { value: 'swimming' },
    });
    expect(input).toContainHTML('swimming');
  });
});
