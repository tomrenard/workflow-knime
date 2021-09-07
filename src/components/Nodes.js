/* eslint-disable react/prop-types */
import React  from 'react';
import Node from './Node';


export default function Nodes({nodes}) {
  return (
    <>
      { nodes.map((node) => {
       return <Node key={node.name} display={node.display} name={node.name} />
      }) }
    </>
  )
}