/* eslint-disable react/prop-types */
import React  from 'react';
import Node from './Node';


export default function Nodes({nodes, undisplayed}) {
  return (
    <>
      { nodes.map((node) => {
       return <Node key={node.name} id={node.id} undisplayed={undisplayed} display={node.display} name={node.name} />
      }) }
    </>
  )
}