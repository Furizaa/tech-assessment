import { RootState } from "../index";

export const getCurrentValue = (state: RootState) => state.counter.counterValue;

export const getAccumulation = (state: RootState) => state.counter.accumulation;
