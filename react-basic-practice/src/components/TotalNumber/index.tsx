import { useMemo } from 'react';
import { RoomInterface } from '../../interface/room';

type Prop = {
  totalRooms: RoomInterface[];
};

export const TotalNumber = ({ totalRooms }: Prop) => {
  const total = useMemo(() => {
    const result = totalRooms.length;

    return result;
  }, [totalRooms.length]);

  return (
    <button type="button" className="btn btn-outline-primary" disabled>
      Total List: <span className="badge bg-secondary">{total}</span>
    </button>
  );
};
