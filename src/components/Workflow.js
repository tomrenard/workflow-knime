import React from "react";
import styled from "styled-components";
import SearchParams from "./SearchParams";
import PropTypes from "prop-types";

const WorkflowSectionStyles = styled.section`
  max-width: 700px;
  max-height: 700px;
  margin: 4rem auto;
`;

const WorkflowDivStyles = styled.div`
  border: 6px solid gold;
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
    </WorkflowSectionStyles>
  );
}

Workflow.propTypes = {
  nodes: PropTypes.array,
};
