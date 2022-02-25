/* eslint-disable no-undef */
import React from 'react';
import SortButton from './index';
import { render, fireEvent } from '@testing-library/react';

const props = { onSortRooms: jest.fn() };

describe('Sort button test', () => {
  test('Should display down icon correctly', () => {
    const toggleSort = false;

    const component = render(<SortButton {...props} toggleSort={toggleSort} />);

    const icon = component.getByTestId('sort-down');

    expect(icon).toBeInTheDocument();
  });

  test('Should display up icon correctly', () => {
    const toggleSort = true;

    const component = render(<SortButton {...props} toggleSort={toggleSort} />);

    const icon = component.getByTestId('sort-up');

    expect(icon).toBeInTheDocument();
  });

  test('Should trigger sort room when click button correctly', () => {
    const toggleSort = true;

    const component = render(<SortButton {...props} toggleSort={toggleSort} />);

    const button = component.getByRole('button');
    fireEvent.click(button);

    expect(props.onSortRooms).toHaveBeenCalledTimes(1);
  });
});
