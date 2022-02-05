import { Room } from './Room';
import { SortButton } from './SortButton';
import { RoomInterface } from '../../interface/room';

type Prop = {
  rooms: RoomInterface[];
};

export const RoomTable = ({ rooms }: Prop) => (
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
        return <Room key={room.id} listRoom={room} listIndex={index} />;
      })}
    </tbody>
  </table>
);
