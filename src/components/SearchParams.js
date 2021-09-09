import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NodesList from "./NodesList";

const SearchParamsStyles = styled.div`
  display: flex;
  input {
    border: 1px solid black;
    padding: 1rem;
    text-align: left;
  }
`;

export default function SearchParams({ nodes, addNode }) {
  const [input, setInput] = useState("");
  const [nodesList, setNodesList] = useState();
  const [isShown, setIsShown] = useState(false);

  const detectInput = () => {
    input ? setIsShown(true) : setIsShown(false);
  };

  const updateInput = (e) => {
    // I'm not sure if this one is really scalable, implementing regEx for example could be an idea
    const filtered = nodes.filter((node) => {
      return node.name.toLowerCase().includes(input.toLowerCase());
    });
    setInput(e.target.value);
    setNodesList(filtered);
  };

  useEffect(() => {
    detectInput();
  }, [nodesList]);
  // Would be better for the UX to add the new node at the end of the ul and not regarding the previous array order, for that we need to mutate our state with the new array order each time the component re-renders
  return (
    <>
      <SearchParamsStyles>
        <input
          value={input}
          type="search"
          placeholder="Add a new node"
          onChange={updateInput}
        />
      </SearchParamsStyles>
      <div className="list-container">
        {isShown ? <NodesList addNode={addNode} nodesList={nodesList} /> : null}
      </div>
    </>
  );
}
