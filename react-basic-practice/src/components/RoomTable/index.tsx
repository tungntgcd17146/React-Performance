/* eslint-disable no-unused-vars */
import { Room } from './Room';
import { SortButton } from './SortButton';
import { RoomInterface } from '../../interface/room';

type Props = {
  rooms: RoomInterface[];
  deleteRoom: (roomId: string) => void;
};

export const RoomTable = ({ rooms, deleteRoom }: Props) => (
  <table className="table table-hover table-bordered">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">
          Room name <SortButton />
        </th>
        <th scope="col">Unique code</th>
        <th scope="col">Price for 1 night</th>
        <th scope="col">Rooms available</th>
        <th scope="col">Config</th>
      </tr>
    </thead>
    <tbody>
      {rooms.map((room: RoomInterface, index: number) => {
        return <Room key={room.id} listRoom={room} listIndex={index} handleDelete={deleteRoom} />;
      })}
    </tbody>
  </table>
);
