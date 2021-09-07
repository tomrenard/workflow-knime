/* eslint-disable react/prop-types */
import React from "react";
import Node from "./Node";

export default function Nodes({ nodes, undisplayed }) {
  
  return (
    <>
      {nodes.map((node) => {
        return (
          <Node
            key={node.name}
            id={node.id}
            color={node.color}
            type={node.type}
            entry={node.entry}
            undisplayed={undisplayed}
            name={node.name}
            display={node.display}
          />
        );
      })}
    </>
  );
}
