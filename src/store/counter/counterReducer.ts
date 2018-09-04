import { ActionType, getType } from "typesafe-actions";
import { combineReducers, Reducer } from "redux";
import * as counterActions from "./counterActions";

export type CounterState = {
  readonly counterValue: number;
  readonly accumulation: Readonly<Record<string, number>>;
};

export type CounterAction = ActionType<typeof counterActions>;

export const initialState: CounterState = {
  counterValue: 1,
  accumulation: { "1": 1 }
};

export const reducer: Reducer<CounterState, CounterAction> = (
  state: CounterState = initialState,
  action: CounterAction
) => {
  switch (action.type) {
    case getType(counterActions.increment):
      const incrementedValue = Math.min(10, state.counterValue + 1);
      return {
        counterValue: incrementedValue,
        accumulation:
          incrementedValue === state.counterValue
            ? state.accumulation
            : {
                ...state.accumulation,
                [`${incrementedValue}`]:
                  (state.accumulation[`${incrementedValue}`] || 0) + 1
              }
      };
    case getType(counterActions.decrement):
      const decrementedValue = Math.max(1, state.counterValue - 1);
      return {
        counterValue: decrementedValue,
        accumulation:
          decrementedValue === state.counterValue
            ? state.accumulation
            : {
                ...state.accumulation,
                [`${decrementedValue}`]:
                  (state.accumulation[`${decrementedValue}`] || 0) + 1
              }
      };
  }
  return state;
};
