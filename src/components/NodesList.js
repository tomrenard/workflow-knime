import React from "react";
import PropTypes from "prop-types";

export default function NodesList({ nodesList = [] }) {
  return (
    <>
      {nodesList.map((node) => {
        if (node) {
          return (
            <div key={node.name}>
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
