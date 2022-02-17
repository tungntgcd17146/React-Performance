import { memo } from 'react';

type Prop = {
  totalRooms: number;
};

const TotalNumber = ({ totalRooms }: Prop) => (
  <button type="button" className="btn btn-outline-primary position-relative">
    Total list
    <span className="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-danger">
      {totalRooms}
    </span>
  </button>
);

export default memo(TotalNumber);

TotalNumber.whyDidYouRender = true;
