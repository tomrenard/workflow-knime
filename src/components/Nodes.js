import React, { useState } from "react";
import styled from "styled-components";

const NodesListStyles = styled.ul`
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 1rem;
  @media (max-width: 740px) {
    flex-direction: column;
  }
  li {
    button {
    border: 1px solid black;
    border-radius: 25%25%;
    background-color: transparent;
    &:hover {
      background-color: red;
      color: white;
      border: 1px solid red;
    }
  }
    margin: 1rem;
    p {
      font-size: 0.8rem;
    }
    .icon-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90px;
    height: 90px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    }
    .triangle {
      width: 0;
      height: 0;
      margin-bottom: 1rem;
      border-style: solid;
      border-width: 10px 0 10px 20px;
      border-color: transparent transparent transparent #000000;
    }
  }
  .source-container {
    text-align: left;
    padding-left: 1rem;
  }
`;

const initialDnDState = {
  draggedFrom: null,
  draggedTo: null,
  isDragging: false,
  originalOrder: [],
  updatedOrder: [],
};

export default function Nodes({ nodes, removeNode }) {
  const [list, setList] = useState(nodes);
  const [dragAndDrop, setDragAndDrop] = useState(initialDnDState);
  // We could extract the drag and drop feature logic in an external file, to increase readibilty, this file is getting a bit longer
  // I decided to use old function syntax, I found it more readible on longer file, to avoid confusion between variables and functions
  function onDragStart(event) {
    const initialPosition = Number(event.currentTarget.dataset.position);
    setDragAndDrop({
      ...dragAndDrop,
      draggedFrom: initialPosition,
      isDragging: true,
      originalOrder: list,
    });
    // following line is needed for firefox browser
    event.dataTransfer.setData("text/html", "");
  }
  function onDragOver(event) {
    event.preventDefault();

    let newList = dragAndDrop.originalOrder;

    const draggedFrom = dragAndDrop.draggedFrom;

    const draggedTo = Number(event.currentTarget.dataset.position);

    const itemDragged = newList[draggedFrom];
    const remainingItems = newList.filter(
      (item, index) => index !== draggedFrom
    );

    newList = [
      ...remainingItems.slice(0, draggedTo),
      itemDragged,
      ...remainingItems.slice(draggedTo),
    ];

    if (draggedTo !== dragAndDrop.draggedTo) {
      setDragAndDrop({
        ...dragAndDrop,
        updatedOrder: newList,
        draggedTo: draggedTo,
      });
    }
  }
  function onDrop(event) {
    setList(dragAndDrop.updatedOrder);

    setDragAndDrop({
      ...dragAndDrop,
      draggedFrom: null,
      draggedTo: null,
      isDragging: false,
    });
  }

  function onDragLeave() {
    setDragAndDrop({
      ...dragAndDrop,
      draggedTo: null,
    });
  }
  return (
    <NodesListStyles>
      {list.map((node, index) => {
        return (
          <div key={node.id}>
            {node.display ? (
              // We could create an specific file for the node component to increase file readibility
              // We should implement the arrows connection using a dedicated component, and saving a state status into our node using useState, to check if the connection is linked or not
              <li
                className={
                  dragAndDrop && dragAndDrop.draggedTo === Number(index)
                    ? "dropArea"
                    : ""
                }
                key={`${node.id}-${index}`}
                data-position={index}
                draggable
                onDragStart={onDragStart}
                onDragOver={onDragOver}
                onDrop={onDrop}
                onDragLeave={onDragLeave}
              >
                <p>{node.name}</p>
                <div style={{display: 'flex'}}>
                  <div style={{ backgroundColor: node.color }} className="icon-container"><button onClick={() => removeNode(node.id)}>x</button></div>
                  <div>
                    <div className="triangle"></div>
                    {node.output > 1 ?
                    <div className="triangle"></div>
                    :
                    null
                    }
                  </div>
                </div>
                <div className="source-container">
                  <p>{node.type}</p>  
                </div>
              </li>
            ) : null}
          </div>
        );
      })}
    </NodesListStyles>
  );
}
