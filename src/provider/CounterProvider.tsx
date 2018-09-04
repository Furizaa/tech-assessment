import * as React from "react";
import { Dispatch, bindActionCreators } from "redux";
import { connect } from "react-redux";

import { RootState } from "../store";
import * as fromCounter from "../store/counter/counterSelectors";
import * as counterAction from "../store/counter/counterActions";

interface CounterProviderInjectedProps {
  readonly currentValue: number;
  readonly accumulation: Readonly<Record<string, number>>;
}

interface CounterProviderInjectedDispatch {
  readonly onIncrement: typeof counterAction.increment;
  readonly onDecrement: typeof counterAction.decrement;
}

interface CounterProviderProps
  extends CounterProviderInjectedProps,
    CounterProviderInjectedDispatch {
  render: (
    injectedProps: CounterProviderInjectedProps &
      CounterProviderInjectedDispatch
  ) => React.ReactNode;
}

const mapStateToProps = (state: RootState) => ({
  currentValue: fromCounter.getCurrentValue(state),
  accumulation: fromCounter.getAccumulation(state)
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      onIncrement: counterAction.increment,
      onDecrement: counterAction.decrement
    },
    dispatch
  );

class CounterProvider extends React.Component<CounterProviderProps> {
  render() {
    const { render, ...other } = this.props;
    return render(other);
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterProvider);
