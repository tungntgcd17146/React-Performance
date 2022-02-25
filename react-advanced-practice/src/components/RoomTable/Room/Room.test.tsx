/* eslint-disable no-undef */
import React from 'react';
import Room from './index';
import { render, fireEvent } from '@testing-library/react';

const room = {
  id: 'bTvTk',
  name: 'Deluxe Room',
  quantity: 32,
  price: 50
};
const props = { room: room, order: 4, onDeleteRoom: jest.fn() };
const { getByRole } = render(<Room {...props} />);

describe('Room component test', () => {
  test('Should delete button onClick event correctly', () => {
    const button = getByRole('button');

    fireEvent.click(button);
    expect(props.onDeleteRoom).toHaveBeenCalledTimes(1);
  });
});
