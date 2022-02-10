import { FaSortAlphaDown, FaSortAlphaDownAlt } from 'react-icons/fa';
import { memo } from 'react';

type Props = {
  onSortButton: () => void;
  toggleSort: Boolean;
};

const SortButton = ({ onSortButton, toggleSort }: Props) => (
  <button onClick={onSortButton} type="button" className="btn btn-outline-primary">
    {!toggleSort ? <FaSortAlphaDown /> : <FaSortAlphaDownAlt />}
  </button>
);

export default memo(SortButton);

SortButton.whyDidYouRender = true;
