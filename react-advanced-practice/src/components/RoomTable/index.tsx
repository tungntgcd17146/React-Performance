/* eslint-disable no-unused-vars */
import Room from './Room';
import SortButton from './SortButton';
import { RoomInterface } from '../../interface/room';
import { useRoom } from '../../context/RoomContext';
import { useCallback } from 'react';

export const RoomTable = () => {
  const { setRooms, roomsAfterFilter } = useRoom();

  const handleDeleteRoom = useCallback((roomId: string) => {
    setRooms((prevRooms) => prevRooms.filter((room) => room.id !== roomId));
  }, []);

  return (
    <table className="table-fill">
      <thead>
        <tr>
          <th className="text-left" scope="col">
            ID
          </th>
          <th className="text-left" scope="col">
            Room name <SortButton />
          </th>
          <th className="text-left" scope="col">
            Price for 1 night
          </th>
          <th className="text-left" scope="col">
            Rooms available
          </th>
          <th className="text-left" scope="col">
            Config
          </th>
        </tr>
      </thead>
      <tbody className="table-hover">
        {roomsAfterFilter.map((room: RoomInterface, index: number) => (
          <Room key={room.id} room={room} order={index + 1} onDelete={handleDeleteRoom} />
        ))}
      </tbody>
    </table>
  );
};

RoomTable.whyDidYouRender = true;
