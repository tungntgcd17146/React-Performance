/* eslint-disable no-undef */
import React from 'react';
import AddButton from './index';
import { render, fireEvent } from '@testing-library/react';

describe('Add button test', () => {
  test('Should render button correctly', () => {
    const onClick = jest.fn();

    const { getByRole } = render(<AddButton addRoom={onClick} />);

    const button = getByRole('button');
    expect(button).toBeInTheDocument();
  });

  test('Should button onClick event correctly', () => {
    const onClick = jest.fn();

    const { getByRole } = render(<AddButton addRoom={onClick} />);

    const button = getByRole('button');
    fireEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
