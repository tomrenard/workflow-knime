/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";
import Nodes from "./Nodes";

const CanvaSectionStyles = styled.section`
  background: lightgrey;
  margin: 1rem;
`;

const CanvaStyles = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 2px solid red;
  min-height: 300px;
`;

export default function Canva({ nodes, undisplayed }) {
  return (
    <CanvaSectionStyles>
      <CanvaStyles>
        <Nodes undisplayed={undisplayed} nodes={nodes} />
      </CanvaStyles>
    </CanvaSectionStyles>
  );
}
