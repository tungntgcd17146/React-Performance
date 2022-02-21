import { memo } from 'react';

type Prop = {
  numberList: number;
};

const TotalNumber = ({ numberList }: Prop) => (
  <button type="button" className="btn btn-outline-primary position-relative">
    Total list
    <span className="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-danger">
      {numberList}
    </span>
  </button>
);

export default memo(TotalNumber);

TotalNumber.whyDidYouRender = true;
