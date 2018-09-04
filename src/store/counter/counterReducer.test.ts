import * as counterActions from "./counterActions";
import { reducer, initialState } from "./counterReducer";

describe("counterReducer", () => {
  describe("value", () => {
    it("cant go below 1", () => {
      const newState = reducer({ ...initialState }, counterActions.decrement());
      expect(newState.counterValue).toBe(1);
    });

    it("will increment", () => {
      const newState = reducer({ ...initialState }, counterActions.increment());
      expect(newState.counterValue).toBe(2);
    });

    it("will decrement", () => {
      const newState = reducer(
        { ...initialState, counterValue: 8 },
        counterActions.decrement()
      );
      expect(newState.counterValue).toBe(7);
    });

    it("cant go higher then 10", () => {
      const newState = reducer(
        { ...initialState, counterValue: 10 },
        counterActions.increment()
      );
      expect(newState.counterValue).toBe(10);
    });
  });

  describe("accumulation", () => {
    it("adds new value on increment", () => {
      const newState = reducer({ ...initialState }, counterActions.increment());
      expect(newState.accumulation).toEqual({ "1": 1, "2": 1 });
    });

    it("counts up existing value", () => {
      const newState = reducer(
        { ...initialState, accumulation: { "1": 1, "2": 1 } },
        counterActions.increment()
      );
      expect(newState.accumulation).toEqual({ "1": 1, "2": 2 });
    });

    it("ignores attempted out-of-bounds decrement action", () => {
      const newState = reducer({ ...initialState }, counterActions.decrement());
      expect(newState.accumulation).toEqual({ "1": 1 });
    });

    it("ignores attempted out-of-bounds increment action", () => {
      const newState = reducer(
        { counterValue: 10, accumulation: { "10": 1 } },
        counterActions.increment()
      );
      expect(newState.accumulation).toEqual({ "10": 1 });
    });
  });
});
