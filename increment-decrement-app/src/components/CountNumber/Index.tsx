import { MouseEventHandler } from 'react';
import './index.css';

type PropsType = {
  onDecrement: MouseEventHandler<HTMLButtonElement>;
  number: number;
  onIncrement: MouseEventHandler<HTMLButtonElement>;
};

export function Counter({ onDecrement, number, onIncrement }: PropsType): JSX.Element {

  return (
    <div className="counter">
      <button onClick={onDecrement} className="button-decrement">
        -
      </button>
      <span className="count-number">{number}</span>
      <button onClick={onIncrement} className="button-increment">
        +
      </button>
    </div>
  );
}

