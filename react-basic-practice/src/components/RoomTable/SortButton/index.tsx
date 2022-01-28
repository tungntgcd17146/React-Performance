import { FaSortAlphaDown, FaSortAlphaDownAlt } from 'react-icons/fa';
import { useState } from 'react';

export const SortButton = () => {
  const [toggleSort, setToggleSort] = useState(false);

  const toggleSortButton = () => {
    setToggleSort(!toggleSort);
  };

  return (
    <>
      <button onClick={toggleSortButton} type="button" className="btn btn-outline-primary">
        {!toggleSort ? <FaSortAlphaDown /> : <FaSortAlphaDownAlt />}
      </button>
    </>
  );
};
