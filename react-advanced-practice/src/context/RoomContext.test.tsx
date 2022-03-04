/* eslint-disable no-undef */
import React, { ChangeEvent, useContext } from 'react';
import RoomsProvider, { RoomsContext } from './RoomContext';
import { RoomInterface } from '../interface/room';
import { fireEvent, render, screen } from '@testing-library/react';
import { FaSortAlphaDown, FaSortAlphaDownAlt } from 'react-icons/fa';

describe('Test handle action', () => {
  test('Input Search action correctly', async () => {
    const TestComponent = () => {
      const { setInputSearch, roomsAfterFilter } = useContext(RoomsContext);
      const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
        setInputSearch(event.target.value);
      };

      return (
        <>
          <input onChange={handleChangeInput} data-testid="add-input" />
          {roomsAfterFilter.map((room: RoomInterface) => (
            <li key={room.id} data-testid="li" />
          ))}
        </>
      );
    };

    render(
      <RoomsProvider>
        <TestComponent />
      </RoomsProvider>
    );
    fireEvent.change(screen.getByTestId('add-input'), { target: { value: 'deluxe' } });
    const items = await screen.findAllByTestId('li');

    expect(items).toHaveLength(1);
  });

  test('Add button action correctly', async () => {
    const TestComponent = () => {
      const { addRoom, roomsAfterFilter } = useContext(RoomsContext);

      return (
        <>
          <button onClick={addRoom} data-testid="add-button">
            Add Room
          </button>
          {roomsAfterFilter.map((room: RoomInterface) => (
            <li key={room.id} data-testid="li" />
          ))}
        </>
      );
    };

    render(
      <RoomsProvider>
        <TestComponent />
      </RoomsProvider>
    );
    fireEvent.click(screen.getByTestId('add-button'));
    const items = await screen.findAllByTestId('li');

    expect(items).toHaveLength(4);
  });

  test('Delete button action correctly', async () => {
    const TestComponent = () => {
      const { deleteRoom, roomsAfterFilter } = useContext(RoomsContext);

      const handleDeleteRoom = () => {
        deleteRoom('bTvTk');
      };
      return (
        <>
          <button onClick={handleDeleteRoom} data-testid="delete-button">
            Delete Room
          </button>
          {roomsAfterFilter.map((room: RoomInterface) => (
            <li key={room.id} data-testid="li" />
          ))}
        </>
      );
    };

    render(
      <RoomsProvider>
        <TestComponent />
      </RoomsProvider>
    );
    fireEvent.click(screen.getByTestId('delete-button'));
    const items = await screen.findAllByTestId('li');

    expect(items).toHaveLength(2);
  });

  test('Toggle sort button action not change number list row correctly', async () => {
    const TestComponent = () => {
      const { sortRooms, toggleSort, roomsAfterFilter } = useContext(RoomsContext);

      return (
        <>
          <button onClick={sortRooms} data-testid="sort-button">
            {!toggleSort ? (
              <FaSortAlphaDown data-testid="sort-down" />
            ) : (
              <FaSortAlphaDownAlt data-testid="sort-up" />
            )}
          </button>
          {roomsAfterFilter.map((room: RoomInterface) => (
            <li key={room.id} data-testid="li" />
          ))}
        </>
      );
    };

    render(
      <RoomsProvider>
        <TestComponent />
      </RoomsProvider>
    );
    fireEvent.click(screen.getByTestId('sort-button'));
    const items = await screen.findAllByTestId('li');
    const downIcon = screen.findAllByTestId('sort-down');

    expect(items).toHaveLength(3);
    expect(downIcon).toBeInTheDocument;
  });

  test('Toggle sort button action correctly', async () => {
    const TestComponent = () => {
      const { sortRooms, toggleSort } = useContext(RoomsContext);

      return (
        <>
          <button onClick={sortRooms} data-testid="sort-button">
            {!toggleSort ? (
              <FaSortAlphaDown data-testid="sort-down" />
            ) : (
              <FaSortAlphaDownAlt data-testid="sort-up" />
            )}
          </button>
        </>
      );
    };

    render(
      <RoomsProvider>
        <TestComponent />
      </RoomsProvider>
    );
    const downIcon = screen.findAllByTestId('sort-down');
    const upIcon = screen.findAllByTestId('sort-up');

    fireEvent.click(screen.getByTestId('sort-button'));
    expect(downIcon).toBeInTheDocument;

    fireEvent.click(screen.getByTestId('sort-button'));
    expect(upIcon).toBeInTheDocument;
  });
});
