import { memo } from 'react';

type Prop = {
  totalRooms: number;
};

const TotalNumber = ({ totalRooms }: Prop) => (
  <button type="button" className="btn btn-outline-primary" disabled>
    Total List: <span className="badge bg-secondary">{totalRooms}</span>
  </button>
);

export default memo(TotalNumber);
