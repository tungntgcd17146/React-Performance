/* eslint-disable no-undef */
import React from 'react';
import Room from './index';
import { render, fireEvent } from '@testing-library/react';

describe('Room component test', () => {
  test('Should render the right room and delete button onclick', () => {
    const onClickDelete = jest.fn();
    const room = {
      id: 'bTvTk',
      name: 'Deluxe Room',
      quantity: 32,
      price: 50
    };
    const order = 4;

    const { getByRole } = render(<Room room={room} order={order} onDeleteRoom={onClickDelete} />);

    const button = getByRole('button');
    expect(button).toBeInTheDocument();
    fireEvent.click(button);

    expect(onClickDelete).toHaveBeenCalledTimes(1);
  });
});
