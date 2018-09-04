import { combineReducers } from "redux";
import {
  reducer as counter,
  CounterState,
  CounterAction
} from "./counter/counterReducer";

export type RootState = Readonly<{
  counter: CounterState;
}>;

export type RootAction = CounterAction;

export default combineReducers<RootState, RootAction>({ counter });
