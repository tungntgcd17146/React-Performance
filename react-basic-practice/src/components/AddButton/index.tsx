type Prop = {
  onClickAdd: () => void;
};

export const AddButton = ({ onClickAdd }: Prop) => (
  <button onClick={onClickAdd} className="btn btn-outline-success">
    Create new room
  </button>
);
