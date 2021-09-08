import React, { useState } from "react";
import styled from "styled-components";
import SearchParams from "./SearchParams";
import Canva from "./Canva";

const WorkflowSectionStyles = styled.section`
  max-width: 800px;
  max-height: 800px;
  margin: 4rem auto;
  border: 6px solid black;
  background-color: white;
`;

const WorkflowDivStyles = styled.div`
  text-align: center;
  padding: 1rem;
  h1 {
    text-transform: uppercase;
    padding: 1rem;
  }
`;

export default function Workflow({ nodes }) {
  const [displayNodes, setDisplayNodes] = useState(nodes);
  function addNode(id) {
    const newNodes = [...displayNodes];
    newNodes.filter((el) => {
      return el.id === id ? (el.display = true) : null;
    });
    setDisplayNodes(newNodes);
  }
  function removeNode(id) {
    const newNodes = [...displayNodes];
    newNodes.filter((el) => {
      return el.id === id ? (el.display = false) : null;
    });
    setDisplayNodes(newNodes);
  }
  return (
    <WorkflowSectionStyles>
      <WorkflowDivStyles>
        <div>
          <h1>Workflow</h1>
        </div>
        <SearchParams addNode={addNode} nodes={displayNodes} />
      </WorkflowDivStyles>
      <Canva removeNode={removeNode} nodes={displayNodes} />
    </WorkflowSectionStyles>
  );
}
