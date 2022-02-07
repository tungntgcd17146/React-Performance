import { FaSortAlphaDown, FaSortAlphaDownAlt } from 'react-icons/fa';
import { Dispatch, SetStateAction, useState } from 'react';
import { RoomInterface } from '../../../interface/room';

type Props = {
  rooms: RoomInterface[];
  sortRooms: Dispatch<SetStateAction<RoomInterface[]>>;
};

export const SortButton = ({ rooms, sortRooms }: Props) => {
  const [toggleSort, setToggleSort] = useState(false);

  const toggleSortButton = () => {
    setToggleSort(!toggleSort);
    const sortAZ = rooms.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
    const sortZA = [...rooms].sort((a, b) => {
      if (a.name > b.name) {
        return -1;
      }
      return 0;
    });
    sortRooms(!toggleSort ? sortZA : sortAZ);
  };

  return (
    <>
      <button onClick={toggleSortButton} type="button" className="btn btn-outline-primary">
        {!toggleSort ? <FaSortAlphaDown /> : <FaSortAlphaDownAlt />}
      </button>
    </>
  );
};
