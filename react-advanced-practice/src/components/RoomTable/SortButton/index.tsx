import { FaSortAlphaDown, FaSortAlphaDownAlt } from 'react-icons/fa';
import { memo } from 'react';

type Props = {
  onSortRooms: () => void;
  toggleSort: boolean;
};

const SortButton = ({ onSortRooms, toggleSort }: Props) => (
  <button onClick={onSortRooms} type="button" className="btn btn-outline-primary">
    {!toggleSort ? (
      <FaSortAlphaDown data-testid="sort-down" />
    ) : (
      <FaSortAlphaDownAlt data-testid="sort-up" />
    )}
  </button>
);

export default memo(SortButton);

SortButton.whyDidYouRender = true;
