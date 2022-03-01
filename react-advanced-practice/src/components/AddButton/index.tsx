/* eslint-disable no-unused-vars */
import { memo, useState } from 'react';

type Prop = {
  onAddRoom: () => void;
  title: string;
  type: string;
  status: boolean;
};

const Button = ({ onAddRoom, title, type, status }: Prop) => {
  const handleAdd = () => {
    onAddRoom();
  };

  return (
    <button onClick={handleAdd} className={`btn btn-outline-${type}`} disabled={status}>
      {title}
    </button>
  );
};

export default memo(Button);

Button.whyDidYouRender = true;
