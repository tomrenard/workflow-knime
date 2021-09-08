/* eslint-disable react/prop-types */
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
    width: 70px;
    height: 70px;
    background-color: red;
    text-align: center;
    padding: 1rem;
    margin: 1rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    p {
      font-size: 0.8rem;
    }
  }
`;

const initialDnDState = {
  draggedFrom: null,
  draggedTo: null,
  isDragging: false,
  originalOrder: [],
  updatedOrder: []
 }

export default function Nodes({ nodes, undisplayed }) {
  const [list, setList] = useState(nodes);
  const [dragAndDrop, setDragAndDrop] = useState(initialDnDState);
  const onDragStart = (event) => {
    const initialPosition = Number(event.currentTarget.dataset.position);
    setDragAndDrop({
     ...dragAndDrop,
     draggedFrom: initialPosition,
     isDragging: true,
     originalOrder: list
    });
    //for firefox
    event.dataTransfer.setData("text/html", '');
   }
   const onDragOver = (event) => {
    event.preventDefault();
    
    let newList = dragAndDrop.originalOrder;
   
    const draggedFrom = dragAndDrop.draggedFrom; 
  
    const draggedTo = Number(event.currentTarget.dataset.position); 
  
    const itemDragged = newList[draggedFrom];
    const remainingItems = newList.filter((item, index) => index !== draggedFrom);
  
     newList = [
      ...remainingItems.slice(0, draggedTo),
      itemDragged,
      ...remainingItems.slice(draggedTo)
     ];
      
    if (draggedTo !== dragAndDrop.draggedTo){
     setDragAndDrop({
      ...dragAndDrop,
      updatedOrder: newList,
      draggedTo: draggedTo
     })
    }
   }
   const onDrop = (event) => {
  
    setList(dragAndDrop.updatedOrder);
    
    setDragAndDrop({
     ...dragAndDrop,
     draggedFrom: null,
     draggedTo: null,
     isDragging: false
    });
   }
  
  
   const onDragLeave = () => {
     setDragAndDrop({
     ...dragAndDrop,
     draggedTo: null
    });
    
   }
  return (
    <NodesListStyles>
      {list.map((node, index) => {
        return (
          <div key={node.id}>
            {node.display ? (
              <li 
              className={dragAndDrop && dragAndDrop.draggedTo=== Number(index) ? "dropArea" : ""}
              style={{ backgroundColor: node.color }}
              key={`${node.id}-${index}`}
              data-position={index}
              draggable
              onDragStart={onDragStart}
              onDragOver={onDragOver}
              onDrop={onDrop}
              onDragLeave={onDragLeave}
              >
                <p>{node.name}</p>
                <button onClick={() => undisplayed(node.id)}>x</button>
              </li>
            ) : null}
          </div>
        );
      })}
    </NodesListStyles>
  );
}
