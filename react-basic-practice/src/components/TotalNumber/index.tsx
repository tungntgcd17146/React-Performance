import { useMemo } from 'react';
import { RoomInterface } from '../../interface/room';

type Prop = {
  onTotalRooms: RoomInterface[];
};

const TotalNumber = ({ onTotalRooms }: Prop) => {
  const total = useMemo(() => {
    const result = onTotalRooms.length;

    return result;
  }, [onTotalRooms.length]);

  return (
    <button type="button" className="btn btn-outline-primary" disabled>
      Total List: <span className="badge bg-secondary">{total}</span>
    </button>
  );
};

export default TotalNumber;
