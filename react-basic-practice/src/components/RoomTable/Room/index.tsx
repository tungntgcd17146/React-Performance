/* eslint-disable no-unused-vars */
import { memo } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { RoomInterface } from '../../../interface/room';

type Props = {
  room: RoomInterface;
  order: number;
  onDelete: (roomId: string) => void;
};

const Room = ({ room, order, onDelete }: Props) => {
  const handleDeleteRoom = () => {
    onDelete(room.id);
  };

  const { name, id, price, quantity } = room;

  return (
    <tr>
      <th scope="row">{order}</th>
      <td>
        {name} {id}
      </td>
      <td>{price} $</td>
      <td>{quantity} room</td>
      <td>
        <button onClick={handleDeleteRoom} type="button" className="btn btn-outline-danger">
          <AiFillDelete />
        </button>
      </td>
    </tr>
  );
};

export default memo(Room);

Room.whyDidYouRender = true;
