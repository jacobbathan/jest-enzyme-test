import React from "react";
import { shallow } from "enzyme";

import { App, Clock } from "../App";

describe("App.js", () => {
  const wrap = shallow(<App />);
  it("Contains the text hello world I love code", () => {
    expect(wrap.text()).toMatch(/hello world i love code/i);
  });

  it("React clock is imported and rendered", () => {
    expect(wrap.containsMatchingElement(<Clock />)).toEqual(true);
  });
});
