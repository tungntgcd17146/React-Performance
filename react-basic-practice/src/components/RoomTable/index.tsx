/* eslint-disable no-unused-vars */
import { Room } from './Room';
import { SortButton } from './SortButton';
import { RoomInterface } from '../../interface/room';
import { Dispatch, SetStateAction } from 'react';

type Props = {
  rooms: RoomInterface[];
  onDeleteRoom: (roomId: string) => void;
  setRooms: Dispatch<SetStateAction<RoomInterface[]>>;
};

export const RoomTable = ({ rooms, onDeleteRoom, setRooms }: Props) => (
  <table className="table table-hover table-bordered">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">
          Room name <SortButton sortRooms={setRooms} rooms={rooms} />
        </th>
        <th scope="col">Unique code</th>
        <th scope="col">Price for 1 night</th>
        <th scope="col">Rooms available</th>
        <th scope="col">Config</th>
      </tr>
    </thead>
    <tbody>
      {rooms.map((room: RoomInterface, index: number) => (
        <Room key={room.id} room={room} order={index + 1} onDelete={onDeleteRoom} />
      ))}
    </tbody>
  </table>
);
