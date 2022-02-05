/* eslint-disable no-unused-vars */
import { AiFillDelete } from 'react-icons/ai';

import { RoomInterface } from '../../../interface/room';

type Props = {
  listRoom: RoomInterface;
  listIndex: number;
  handleDelete: (roomId: string) => void;
};

export const Room = ({ listRoom, listIndex, handleDelete }: Props) => {
  return (
    <tr>
      <th scope="row">{listIndex + 1}</th>
      <td>{listRoom.name}</td>
      <td>{listRoom.id}</td>
      <td>{listRoom.price} $</td>
      <td>{listRoom.quantity} room</td>
      <td>
        <button
          onClick={() => handleDelete(listRoom.id)}
          type="button"
          className="btn btn-outline-danger">
          <AiFillDelete />
        </button>
      </td>
    </tr>
  );
};
