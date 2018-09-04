import * as React from "react";
import { Link } from "react-router-dom";

import CounterProvider from "../../provider/CounterProvider";
import { Counter } from "../../components/Counter/Counter";

export const Home: React.StatelessComponent<void> = () => (
  <React.Fragment>
    <CounterProvider
      render={({ currentValue, onIncrement, onDecrement }) => (
        <Counter
          currentValue={currentValue}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
        />
      )}
    />
    <Link to="/result">Go to result -></Link>
  </React.Fragment>
);
