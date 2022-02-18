import { memo } from 'react';
import { useRoom } from '../../context/RoomContext';

const TotalNumber = () => {
  const { roomsAfterFilter } = useRoom();
  return (
    <button type="button" className="btn btn-outline-primary position-relative">
      Total list
      <span className="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-danger">
        {roomsAfterFilter.length}
      </span>
    </button>
  );
};

export default memo(TotalNumber);

TotalNumber.whyDidYouRender = true;
