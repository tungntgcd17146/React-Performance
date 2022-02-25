/* eslint-disable no-undef */
import React from 'react';
import { RoomTable } from './index';
import { RoomsContext } from '../../context/RoomContext';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

// const roomsAfterFilter = [
//   {
//     id: 'bTvTk',
//     name: 'Deluxe Room',
//     quantity: 32,
//     price: 50
//   }
// ];
// const setInputSearch = jest.fn();
// const sortRooms = jest.fn();
// const toggleSort = true;
// const addRoom = jest.fn();
// const deleteRoom = jest.fn();
// const numberList = 5;

const props = {
  roomsAfterFilter: [
    {
      id: 'bTvTk',
      name: 'Deluxe Room',
      quantity: 32,
      price: 50
    }
  ],
  setInputSearch: jest.fn(),
  sortRooms: jest.fn(),
  toggleSort: true,
  addRoom: jest.fn(),
  deleteRoom: jest.fn(),
  numberList: 5
};

describe('Should RoomTable render correctly', () => {
  test('Should render Room correctly', () => {
    render(
      <RoomsContext.Provider
        value={{
          ...props
        }}>
        <RoomTable />
      </RoomsContext.Provider>
    );

    expect(props.roomsAfterFilter).toHaveLength(1);
  });
});
