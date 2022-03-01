/* eslint-disable no-unused-vars */
import { memo } from 'react';

type ButtonType = 'primary' | 'danger' | 'success' | 'secondary';

type Props = {
  onClick: () => void;
  title: string;
  type: ButtonType;
  status: boolean;
};

const Button = ({ onClick, title, type, status }: Props) => (
  <button onClick={onClick} className={`btn btn-outline-${type}`} disabled={status}>
    {title}
  </button>
);

export default memo(Button);

Button.whyDidYouRender = true;
