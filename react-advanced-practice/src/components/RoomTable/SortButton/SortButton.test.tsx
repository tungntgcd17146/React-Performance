/* eslint-disable no-undef */
import React from 'react';
import SortButton from './index';
import { render, fireEvent } from '@testing-library/react';

describe('Sort button test', () => {
  test('Should render sort button correctly', () => {
    const onClick = jest.fn();
    const toggleSort = true && false;

    const { getByRole } = render(<SortButton onSortRooms={onClick} toggleSort={toggleSort} />);

    const button = getByRole('button');
    expect(button).toBeInTheDocument();
  });

  test('Should sort button onClick event correctly', () => {
    const onClick = jest.fn();
    const toggleSort = true && false;

    const { getByRole } = render(<SortButton onSortRooms={onClick} toggleSort={toggleSort} />);

    const button = getByRole('button');
    fireEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
