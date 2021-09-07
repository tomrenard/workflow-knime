/* eslint-disable react/prop-types */
import React, { useState } from "react";
import styled from "styled-components";
import SearchParams from "./SearchParams";
import PropTypes from "prop-types";
import Canva from "./Canva";

const WorkflowSectionStyles = styled.section`
  max-width: 800px;
  max-height: 800px;
  margin: 4rem auto;
  border: 6px solid gold;

`;

const WorkflowDivStyles = styled.div`
  text-align: center;
`;

export default function Workflow({ nodes }) {
  const [displayNodes, setDisplayNodes] = useState(nodes);
  function displayed(index) {
    const newNodes = [...displayNodes];
    newNodes[index].display = true;
    setDisplayNodes(newNodes);
  }
  function undisplayed(id) {
    const newNodes = [...displayNodes];
    newNodes.filter(el => {
      return el.id === id ? el.display = false : null;
     })
    // newNodes[index].display = false;
    setDisplayNodes(newNodes);
  }
  return (
    <WorkflowSectionStyles>
      <WorkflowDivStyles>
        <div>
          <h1>Workflow</h1>
        </div>
        <SearchParams displayed={displayed} nodes={nodes} />
      </WorkflowDivStyles>
      <Canva undisplayed={undisplayed} nodes={nodes} />
    </WorkflowSectionStyles>
  );
}

Workflow.propTypes = {
  nodes: PropTypes.array,
};
