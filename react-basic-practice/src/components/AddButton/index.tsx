type Prop = {
  handleAdd: () => void;
};

export const AddButton = ({ handleAdd }: Prop) => (
  <button onClick={handleAdd} className="btn btn-outline-success">
    Create new room
  </button>
);
