/* eslint-disable no-unused-vars */
import { Room } from './Room';
import SortButton from './SortButton';
import { RoomInterface } from '../../interface/room';

type Props = {
  onRoomsAfterFilter: RoomInterface[];
  onDeleteRoom: (roomId: string) => void;
  onSortButton: () => void;
  onToggleSort: Boolean;
};

export const RoomTable = ({
  onRoomsAfterFilter,
  onDeleteRoom,
  onSortButton,
  onToggleSort
}: Props) => (
  <table className="table table-hover table-bordered">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">
          Room name <SortButton onSortButton={onSortButton} onToggleSort={onToggleSort} />
        </th>
        <th scope="col">Unique code</th>
        <th scope="col">Price for 1 night</th>
        <th scope="col">Rooms available</th>
        <th scope="col">Config</th>
      </tr>
    </thead>
    <tbody>
      {onRoomsAfterFilter.map((room: RoomInterface, index: number) => (
        <Room key={room.id} onRoom={room} order={index + 1} onDelete={onDeleteRoom} />
      ))}
    </tbody>
  </table>
);
