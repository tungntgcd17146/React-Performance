import { RoomInterface } from '../../interface/room';

type Prop = {
  totalRooms: RoomInterface[];
};

export const TotalNumber = ({ totalRooms }: Prop) => {
  return (
    <button type="button" className="btn btn-outline-primary" disabled>
      Total List: <span className="badge bg-secondary">{totalRooms.length}</span>
    </button>
  );
};
