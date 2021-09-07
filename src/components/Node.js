import React, { useState } from 'react';
import styled from 'styled-components';

const NodeStyle = styled.div`
  width: 40px;
  height: 40px;
  border: 1px solid red;
  background-color: red;
`;

// eslint-disable-next-line react/prop-types
export default function Node({ name }) {
  const [display, setDisplay] = useState(true);
  function handleClick() {
    setDisplay(false);
  }
  return (
    <>
    {display ? 
    <NodeStyle>
      <span onClick={handleClick}>x</span>
      <p>{name}</p>
    </NodeStyle>
    :
    null
  }
    </>
  )
}
