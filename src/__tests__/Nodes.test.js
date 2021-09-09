import React from "react";
import { expect, test } from "@jest/globals";
import { render } from "@testing-library/react";
import Nodes from "../components/Nodes";

// Component test below could definitely be improved, consider this one as a test sample of what kind of tests we can implement

const data = [
  {
    name: "Test name",
    color: "color-test",
    type: "test type",
    output: 1,
    display: true,
    id: "test",
  },
];

test("it should accept a node as a prop and display object's name", async () => {
  const nodes = render(<Nodes nodes={data} />);
  const nameComponent = await nodes.findByTestId("node-test-name");
  expect(nameComponent.textContent).toContain(data[0].name);
});

test("it should accept a node as a prop and display object's type", async () => {
  const nodes = render(<Nodes nodes={data} />);
  const typeComponent = await nodes.findByTestId("node-test-type");
  expect(typeComponent.textContent).toContain(data[0].type);
});
