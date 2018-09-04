import * as React from "react";
import { Link } from "react-router-dom";
import CounterProvider from "../../provider/CounterProvider";

export const CounterResult: React.StatelessComponent = () => (
  <React.Fragment>
    <CounterProvider
      render={({ accumulation }) => (
        <ul>
          {Object.keys(accumulation).map(counterValue => (
            <li key={counterValue}>{`Value ${counterValue} appeared ${
              accumulation[counterValue]
            } times.`}</li>
          ))}
        </ul>
      )}
    />
    <Link to="/">Back to home</Link>
  </React.Fragment>
);
