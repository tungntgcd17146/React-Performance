/* eslint-disable no-undef */
import React from 'react';
import InputSearch from './index';
import { render, fireEvent, screen } from '@testing-library/react';

const props = { setInputSearch: jest.fn() };
render(<InputSearch {...props} />);

describe('Input search test', () => {
  test('Should render input search correctly', () => {
    expect(screen.getByTestId('add-icon-search')).toBeInTheDocument();
    expect(screen.getByTestId('add-word-input')).toBeInTheDocument();
  });

  test('Should input search onChange event correctly', () => {
    render(<InputSearch setInputSearch={props.setInputSearch} />);

    const input: HTMLInputElement = screen.getByTestId('add-word-input');
    fireEvent.change(input, { target: { value: 'testing' } });

    expect(input.value).toBe('testing');
  });

  test('Should input search call correctly', () => {
    render(<InputSearch setInputSearch={props.setInputSearch} />);
    const input: HTMLInputElement = screen.getByTestId('add-word-input');

    fireEvent.change(input, { target: { value: 'testing' } });

    expect(props.setInputSearch).toHaveBeenCalled();
  });
});
