import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NodesList from "./NodesList";

const SearchParamsStyles = styled.div`
  display: flex;
  input {
    width: 100%;
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
  return (
    <>
      <SearchParamsStyles>
        <input
          value={input}
          placeholder="Add a new node"
          onChange={updateInput}
        />
      </SearchParamsStyles>
      {isShown ? <NodesList addNode={addNode} nodesList={nodesList} /> : null}
    </>
  );
}
