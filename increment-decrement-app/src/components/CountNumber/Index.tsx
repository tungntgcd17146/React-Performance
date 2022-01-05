import { MouseEventHandler } from 'react';
import './index.css';

type PropsType = {
  onDecrement: MouseEventHandler<HTMLButtonElement>;
  number: number;
  onIncrement: MouseEventHandler<HTMLButtonElement>;
};

export function Counter(props: PropsType): JSX.Element {
  const { onDecrement, number, onIncrement } = props;

  return (
    <div className="Counter">
      <button onClick={onDecrement} className="Button-decrement">
        -
      </button>
      <span className="Count-number">{number}</span>
      <button onClick={onIncrement} className="Button-increment">
        +
      </button>
    </div>
  );
}
