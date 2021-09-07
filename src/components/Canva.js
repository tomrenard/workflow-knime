/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import Nodes from './Nodes';

const CanvaSectionStyles = styled.section`
  background: lightgrey;
  min-height: 100px;
  margin: 1rem;
  
`;

const CanvaStyles = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100px;
  border: 2px solid red;
`;

export default function Canva({ nodes }) {
  return (
    <CanvaSectionStyles>
      <CanvaStyles>
        <Nodes nodes={nodes}/>
      </CanvaStyles>
    </CanvaSectionStyles>
  )
}
