import React from "react";
import styled from "styled-components";
import Nodes from "./Nodes";

const CanvaSectionStyles = styled.section`
  background: white;
  background-image: radial-gradient(black 1px, transparent 0);
  background-size: 40px 40px;
  background-position: -19px -19px;
  margin: 1rem;
`;

const CanvaStyles = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 2px solid black;
  min-height: 300px;
`;

export default function Canva({ nodes, removeNode }) {
  // We could transform this component in a real canva and allow 2 dimensions drag and drop
  return (
    <CanvaSectionStyles>
      <CanvaStyles>
        <Nodes removeNode={removeNode} nodes={nodes} />
      </CanvaStyles>
    </CanvaSectionStyles>
  );
}
