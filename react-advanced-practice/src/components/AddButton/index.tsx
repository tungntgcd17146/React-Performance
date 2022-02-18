import { memo } from 'react';
import { useRoom } from '../../context/RoomContext';
import { RoomInterface } from '../../interface/room';

import {
  getRandomId,
  getRandomName,
  getRandomPrice,
  getRandomQuantity
} from '../..//helper/random';

const AddButton = () => {
  const { addRoom } = useRoom();

  const handleAddRoom = () => {
    const newRoom: RoomInterface = {
      id: getRandomId(5),
      name: getRandomName(),
      quantity: parseInt(getRandomQuantity(2)),
      price: getRandomPrice()
    };
    addRoom(newRoom);
  };

  return (
    <button onClick={handleAddRoom} className="btn btn-outline-danger">
      Create new room
    </button>
  );
};

export default memo(AddButton);

AddButton.whyDidYouRender = true;
