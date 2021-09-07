/* eslint-disable react/prop-types */
import React  from 'react';
import Node from './Node';


export default function Nodes({nodes}) {
  return (
    <>
      { nodes.map((node) => {
       return <Node key={node.name} name={node.name} />
      }) }
    </>
  )
}
