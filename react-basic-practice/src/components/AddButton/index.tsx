import { memo } from 'react';

type Prop = {
  onClickAdd: () => void;
};

const AddButton = ({ onClickAdd }: Prop) => (
  <button onClick={onClickAdd} className="btn btn-outline-success">
    Create new room
  </button>
);

export default memo(AddButton);
