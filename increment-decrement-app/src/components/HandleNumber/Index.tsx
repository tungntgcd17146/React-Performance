import React from 'react';
import { Counter } from '../CountNumber/Index';

type State = { number: number };

export class HandleNumber extends React.Component<{}, State> {
    
  state: State = {
    number: 29
  };

  handleUpNumber = (): void => {
    this.setState((value) => ({
      number: value.number + 1
    }));
  };

  handleDownNumber = (): void => {
    this.setState((value) => ({
      number: value.number - 1
    }));
  };

  render(): JSX.Element {
    const { number } = this.state;

    return (
          <Counter
            onDecrement={this.handleDownNumber}
            number={number}
            onIncrement={this.handleUpNumber}
          />
    );
  }
}