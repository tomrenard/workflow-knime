import React from 'react';
import { expect, it, describe } from '@jest/globals';
import { render } from "@testing-library/react";
import Nodes from '../components/Nodes';

const nodes = [
  {
    name: "Data Generator",
    color: "orange",
    type: "Generator",
    output: 1,
    display: true,
    id: "data-genator",
  },
];

describe("<Nodes />", () => {
  it("contains name", () => {
    const wrapper = render(<Nodes nodes={nodes} />);
    const value = wrapper.findByTestId("node-test");
    expect(value).toContain(nodes[0].name);
  });
});