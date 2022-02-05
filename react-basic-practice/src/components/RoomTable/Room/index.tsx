import { AiFillDelete } from 'react-icons/ai';

import { RoomInterface } from '../../../interface/room';

type Props = {
  listRoom: RoomInterface;
  listIndex: number;
};

export const Room = ({ listRoom, listIndex }: Props) => {
  return (
    <tr>
      <th scope="row">{listIndex + 1}</th>
      <td>{listRoom.name}</td>
      <td>{listRoom.id}</td>
      <td>{listRoom.price} $</td>
      <td>{listRoom.quantity} room</td>
      <td>
        <button type="button" className="btn btn-outline-danger">
          <AiFillDelete />
        </button>
      </td>
    </tr>
  );
};
