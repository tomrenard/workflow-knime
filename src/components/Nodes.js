import React, { useState } from "react";
import NodesStyles from "../styles/NodesStyles";
import ErrorBoundary from "./ErrorBoundary";

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
  // I'm gonna comment this section along the way as it was the most challenging part as it was my first DnD implementation
  // So in order to implement this feature I decided to use React Hooks 'useState' and the browser API Drag and Drop (cf MDN)
  function onDragStart(event) {
    // This function will receive a DragEvent (same properties as MouseEvent, so we can access the element via event.currentTarget)
    // We access the data-position attribute just below
    const initialPosition = Number(event.currentTarget.dataset.position);
    setDragAndDrop({
      // I'm spreading the properties from the previous state in order to update my new state with all the properties even the ones not updated
      ...dragAndDrop,
      // Then we're setting draggedForm position
      draggedFrom: initialPosition,
      isDragging: true,
      // And we store the current state and order of our nodes
      originalOrder: list,
    });
    // following line is needed for firefox browser, it seems that there are some compatibility issues with the Dnd API
    event.dataTransfer.setData("text/html", "");
  }
  function onDragOver(event) {
    // This function receive a drag event too and we have to prevent the default behavior of if as it's cancelling out the drop by default
    event.preventDefault();
    // We store our nodes in this variable
    let newList = dragAndDrop.originalOrder;

    // Here we're getting the index of the item dragged
    const draggedFrom = dragAndDrop.draggedFrom;

    // Then we're getting the index of the item being hovered where we want to put the node
    const draggedTo = Number(event.currentTarget.dataset.position);

    // We're grabbing the element that we want to drag
    const itemDragged = newList[draggedFrom];

    // We're filtering our list to get all our nodes apart the dragged one
    const remainingItems = newList.filter(
      (item, index) => index !== draggedFrom
    );

    // After we have to update our list of nodes in consequence
    newList = [
      ...remainingItems.slice(0, draggedTo),
      itemDragged,
      ...remainingItems.slice(draggedTo),
    ];

    // Here we check if the targets are different as the event is firing at multiple times
    if (draggedTo !== dragAndDrop.draggedTo) {
      setDragAndDrop({
        ...dragAndDrop,
        // Last step here is to save the new order of our arrays of nodes
        updatedOrder: newList,
        draggedTo: draggedTo,
      });
    }
  }
  function onDrop(event) {
    // Below we're updating the new state of our nodes list
    setList(dragAndDrop.updatedOrder);

    // and resetting to the inital state
    setDragAndDrop({
      ...dragAndDrop,
      draggedFrom: null,
      draggedTo: null,
      isDragging: false,
    });
  }

  function onDragLeave() {
    // This function will be call when an element is moved out of a drop target, we need to set up the draggedTo to a 'null' value to avoid errors
    setDragAndDrop({
      ...dragAndDrop,
      draggedTo: null,
    });
  }
  // To resume, we could improve this feature regarding the browser compatibility and maybe adapt the type of event we're using in consequence (mouseEvent for mobile for instance)
  // We could store our currentState in the localStorage to avoid users to loose the current order if they refresh their tab
  // Adding some CSS transitions would be important to improve the UI when an node is dragged and dropped

  return (
    <ErrorBoundary>
      <NodesStyles>
        {list?.map((node, index) => {
          return (
            <div key={node.id}>
              {node?.display ? (
                // We could create an specific file for the node li component to increase file readibility
                // We should implement the arrows connection using a dedicated component, and saving a state status into our node using useState, to check if the connection is linked or not
                <li
                  key={`${node.id}-${index}`}
                  data-position={index}
                  draggable
                  onDragStart={onDragStart}
                  onDragOver={onDragOver}
                  onDrop={onDrop}
                  onDragLeave={onDragLeave}
                >
                  <p data-testid="node-test">{node.name}</p>
                  <div style={{ display: "flex" }}>
                    <div
                      style={{ backgroundColor: node.color }}
                      className="icon-container"
                    >
                      <button onClick={() => removeNode(node.id)}>x</button>
                    </div>
                    <div>
                      <div className="triangle"></div>
                      {node.output > 1 ? (
                        <div className="triangle"></div>
                      ) : null}
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
      </NodesStyles>
    </ErrorBoundary>
  );
}
