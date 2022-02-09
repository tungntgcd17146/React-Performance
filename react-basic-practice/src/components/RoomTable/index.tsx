/* eslint-disable no-unused-vars */
import { Room } from './Room';
import SortButton from './SortButton';
import { RoomInterface } from '../../interface/room';

type Props = {
  roomsAfterFilter: RoomInterface[];
  onDeleteRoom: (roomId: string) => void;
  onSortButton: () => void;
  toggleSort: Boolean;
};

export const RoomTable = ({ roomsAfterFilter, onDeleteRoom, onSortButton, toggleSort }: Props) => (
  <table className="table table-hover table-bordered">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">
          Room name <SortButton onSortButton={onSortButton} toggleSort={toggleSort} />
        </th>
        <th scope="col">Price for 1 night</th>
        <th scope="col">Rooms available</th>
        <th scope="col">Config</th>
      </tr>
    </thead>
    <tbody>
      {roomsAfterFilter.map((room: RoomInterface, index: number) => (
        <Room key={room.id} room={room} order={index + 1} onDelete={onDeleteRoom} />
      ))}
    </tbody>
  </table>
);
