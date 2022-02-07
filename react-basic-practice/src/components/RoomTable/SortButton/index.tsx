import { FaSortAlphaDown, FaSortAlphaDownAlt } from 'react-icons/fa';
import { memo } from 'react';

type Props = {
  onSortButton: () => void;
  onToggleSort: Boolean;
};

const SortButton = ({ onSortButton, onToggleSort }: Props) => (
  <button onClick={onSortButton} type="button" className="btn btn-outline-primary">
    {!onToggleSort ? <FaSortAlphaDown /> : <FaSortAlphaDownAlt />}
  </button>
);

export default memo(SortButton);
