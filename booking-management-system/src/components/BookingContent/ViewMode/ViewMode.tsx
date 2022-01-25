import { useBookInfo } from '../../../contexts/BookingInfosContext';
import { sortByName } from '../../../reducer/bookingContent/actions';
import React, { useState } from 'react';

export const ViewMode = () => {
  // eslint-disable-next-line no-unused-vars
  const { stateInfo, dispatchInfo } = useBookInfo();
  const [toggleSort, setToggleSort] = useState(false);

  const handleToggleSort = () => {
    setToggleSort(!toggleSort);
    dispatchInfo(sortByName({ totalPrice: toggleSort }));
  };

  return (
    <div className="col-3">
      <button onClick={handleToggleSort} type="submit" className="btn btn-outline-success w-100 ">
        Sort Price {!toggleSort ? 'low to hight' : 'hight to low'}
      </button>
    </div>
  );
};
