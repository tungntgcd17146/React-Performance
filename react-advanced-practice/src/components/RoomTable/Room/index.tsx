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
      <td className="text-left" scope="row">
        {order}
      </td>
      <td className="text-left">
        {name} {id}
      </td>
      <td className="text-left">{price} $</td>
      <td className="text-left">{quantity} room</td>
      <td className="text-left">
        <button onClick={handleDeleteRoom} type="button" className="btn btn-outline-danger">
          <AiFillDelete />
        </button>
      </td>
    </tr>
  );
};

export default memo(Room);

Room.whyDidYouRender = true;
