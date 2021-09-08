import React from "react";
import { expect, test } from "@jest/globals";
import { render } from "@testing-library/react";
import Nodes from "../components/Nodes";

const data = [
  {
    name: "Data Generator",
    color: "orange",
    type: "Generator",
    output: 1,
    display: true,
    id: "data-genator",
  },
];

test("it should accept a node as props and display object's name", async () => {
  const nodes = render(<Nodes nodes={data} />);
  const nameComponent = await nodes.findByTestId("node-test-name");
  expect(nameComponent.textContent).toContain(data[0].name);
});

test("it should accept a node as props and display object's type", async () => {
  const nodes = render(<Nodes nodes={data} />);
  const typeComponent = await nodes.findByTestId("node-test-type");
  expect(typeComponent.textContent).toContain(data[0].type);
});
