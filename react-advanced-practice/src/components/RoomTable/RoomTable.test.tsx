/* eslint-disable no-undef */
import React from 'react';
import { RoomTable } from './index';
import { render, screen } from '@testing-library/react';

describe('Should RoomTable render correctly', () => {
  test('Should render Room correctly', () => {
    // const onClick = jest.fn();
    const roomsAfterFilter = [
      {
        id: 'bTvTk',
        name: 'Deluxe Room',
        quantity: 32,
        price: 50
      }
    ];

    render(<RoomTable />);
    const userList = screen.findAllByTestId('user-item');
    expect(userList).toHaveLength(1);
    // const button = getByRole('button');
    // expect(screen.getByTestId('room-components')).toHaveTextContent(3);
  });
});
