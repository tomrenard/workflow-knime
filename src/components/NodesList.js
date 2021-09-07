/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";

export default function NodesList({ nodesList = [], displayed }) {
  return (
    <>
      {nodesList.map((node, index) => {
        if (node) {
          return (
            <div key={node.name}>
              <button id={node.id} onClick={() => displayed(index)}>+</button>
              <h1>{node.name}</h1>
            </div>
          );
        }
        return null;
      })}
    </>
  );
}

NodesList.propTypes = {
  nodesList: PropTypes.array,
};
