import { MouseEventHandler } from 'react';
import './index.css';

type propsType = {
  onDecrement: MouseEventHandler<HTMLButtonElement>;
  number: number;
  onIncrement: MouseEventHandler<HTMLButtonElement>;
};

export function Counter(props: propsType): JSX.Element {
  const { onDecrement, number, onIncrement } = props;

  return (
    <div className="counter">
      <button onClick={onDecrement} className="btn-decrement">
        -
      </button>
      <span className="count-number">{number}</span>
      <button onClick={onIncrement} className="btn-increment">
        +
      </button>
    </div>
  );
}
