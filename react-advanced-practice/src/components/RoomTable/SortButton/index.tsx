import { FaSortAlphaDown, FaSortAlphaDownAlt } from 'react-icons/fa';
import { memo } from 'react';

type Props = {
  onToggleSortButton: () => void;
  toggleSort: boolean;
};

const SortButton = ({ onToggleSortButton, toggleSort }: Props) => (
  <button onClick={onToggleSortButton} type="button" className="btn btn-outline-primary">
    {!toggleSort ? <FaSortAlphaDown /> : <FaSortAlphaDownAlt />}
  </button>
);

export default memo(SortButton);

SortButton.whyDidYouRender = true;
