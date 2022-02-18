import { FaSortAlphaDown, FaSortAlphaDownAlt } from 'react-icons/fa';
import { memo } from 'react';
import { useRoom } from '../../../context/RoomContext';

const SortButton = () => {
  const { toggleSortButton, toggleSort } = useRoom();

  return (
    <button onClick={toggleSortButton} type="button" className="btn btn-outline-primary">
      {!toggleSort ? <FaSortAlphaDown /> : <FaSortAlphaDownAlt />}
    </button>
  );
};

export default memo(SortButton);

SortButton.whyDidYouRender = true;
