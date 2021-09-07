import React, { useState } from "react";
import styled from "styled-components";

const NodeStyle = styled.li`
  width: 70px;
  height: 70px;
  background-color: red;
  text-align: center;
  padding: 1rem;
  margin: 1rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  p {
    font-size: 0.8rem;
  }
`;

// eslint-disable-next-line react/prop-types
export default function Node({ name, display, undisplayed, id, color, type, entry}) {
  return (
    <>
      {display ? (
        <NodeStyle style={{ backgroundColor: color}}>
          <p>{name}</p>
          <button onClick={() => undisplayed(id)}>x</button>
        </NodeStyle>
      ) : null}
    </>
  );
}
