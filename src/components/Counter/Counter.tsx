import * as React from "react";

export interface CounterProps {
  currentValue: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

export const Counter: React.StatelessComponent<CounterProps> = props => (
  <React.Fragment>
    <h1>{props.currentValue}</h1>
    <button onClick={() => props.onDecrement()}>Dec</button>
    <button onClick={() => props.onIncrement()}>Inc</button>
  </React.Fragment>
);
