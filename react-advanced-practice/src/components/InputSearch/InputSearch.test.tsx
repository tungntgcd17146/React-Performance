/* eslint-disable no-undef */
import React from 'react';
import InputSearch from './index';
import { render, fireEvent, screen } from '@testing-library/react';

describe('Input search test', () => {
  test('Should render the right input search and the onChange', () => {
    const setSearch = jest.fn();

    render(<InputSearch setInputSearch={setSearch} />);
    expect(screen.getByTestId('add-icon-search')).toBeInTheDocument();
    expect(screen.getByTestId('add-word-input')).toBeInTheDocument();

    const input: HTMLInputElement = screen.getByTestId('add-word-input');
    fireEvent.change(input, { target: { value: 'testing' } });
    expect(input.value).toBe('testing');
  });
});
