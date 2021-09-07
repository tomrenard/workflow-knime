import React from "react";
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
  return (
    <WorkflowSectionStyles>
      <WorkflowDivStyles>
        <div>
          <h1>Workflow</h1>
        </div>
        <SearchParams nodes={nodes} />
      </WorkflowDivStyles>
      <Canva nodes={nodes} />
    </WorkflowSectionStyles>
  );
}

Workflow.propTypes = {
  nodes: PropTypes.array,
};
