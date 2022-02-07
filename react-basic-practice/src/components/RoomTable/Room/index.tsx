/* eslint-disable no-unused-vars */
import { AiFillDelete } from 'react-icons/ai';

import { RoomInterface } from '../../../interface/room';

type Props = {
  room: RoomInterface;
  order: number;
  onDelete: (roomId: string) => void;
};

export const Room = ({ room, order, onDelete }: Props) => {
  const onDeleteRoom = () => {
    onDelete(room.id);
  };

  return (
    <tr>
      <th scope="row">{order}</th>
      <td>{room.name}</td>
      <td>{room.id}</td>
      <td>{room.price} $</td>
      <td>{room.quantity} room</td>
      <td>
        <button onClick={onDeleteRoom} type="button" className="btn btn-outline-danger">
          <AiFillDelete />
        </button>
      </td>
    </tr>
  );
};
