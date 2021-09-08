import React from "react";
import styled from "styled-components";

const NodesListLiStyles = styled.li`
  display: flex;
  flex: column;
  justify-content: flex-start;
  .list-li-node {
    display: flex;
    padding-right: 1rem;
    button {
      border: none;
      font-size: 1.3rem;
      font-weight: bolder;
      background-color: transparent;
      cursor: pointer;
      &:hover {
        color: lightgreen;
      }
    }
    p {
      font-size: 0.9rem;
    }
  }
`;

export default function NodesList({ nodesList = [], addNode }) {
  return (
    <div
      style={{
        backgroundColor: 'white',
        boxShadow:
          "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px", position: 'absolute'
      }}
    >
      {nodesList?.map((node, index) => {
        if (node && node?.display === false) {
          return (
            // It would be a good UX improvement to display a little icon of the node here
            <NodesListLiStyles key={node.name}>
              <div className="list-li-node">
                <button id={node.id} onClick={() => addNode(node.id)}>
                  +
                </button>
                <p>{node.name}</p>
              </div>
            </NodesListLiStyles>
          );
        }
        return null;
      })}
    </div>
  );
}
