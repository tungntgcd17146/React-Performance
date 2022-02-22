/* eslint-disable no-undef */
import React from 'react';
import SortButton from './index';
import { render, fireEvent } from '@testing-library/react';

describe('Sort button test', () => {
  test('Should render the right button and the click event', () => {
    const onClick = jest.fn();
    const toggleSort = true && false;

    const { getByRole } = render(<SortButton onSortRooms={onClick} toggleSort={toggleSort} />);

    const button = getByRole('button');
    expect(button).toBeInTheDocument();
    fireEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
