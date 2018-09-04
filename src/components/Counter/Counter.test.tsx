import * as React from "react";
import { render, shallow } from "enzyme";
import { Counter } from "./Counter";

const mockIncrement = jest.fn();
const mockDecrement = jest.fn();

describe("Counter", () => {
  it("shows current value", () => {
    const wrapper = render(
      <Counter
        currentValue={42}
        onIncrement={mockIncrement}
        onDecrement={mockDecrement}
      />
    );
    expect(wrapper.text()).toContain("42");
  });

  it("can increment", () => {
    const wrapper = shallow(
      <Counter
        currentValue={42}
        onIncrement={mockIncrement}
        onDecrement={mockDecrement}
      />
    );
    wrapper
      .find("button")
      .last()
      .simulate("click");
    expect(mockIncrement).toHaveBeenCalledTimes(1);
  });

  it("can decrement", () => {
    const wrapper = shallow(
      <Counter
        currentValue={42}
        onIncrement={mockIncrement}
        onDecrement={mockDecrement}
      />
    );
    wrapper
      .find("button")
      .first()
      .simulate("click");
    expect(mockDecrement).toHaveBeenCalledTimes(1);
  });
});
