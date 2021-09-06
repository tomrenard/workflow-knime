import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import NodesList from "./NodesList";

export default function SearchParams({ nodes }) {
  const [input, setInput] = useState('');
  const [nodesList, setNodesList] = useState();
  const [isShown, setIsShown] = useState(false);

  const detectInput = () => {
    input ? setIsShown(true) : setIsShown(false);
  }

  const updateInput = (e) => {
    const filtered = nodes.filter(node => {
      return node.name.toLowerCase().includes(input.toLowerCase())
    })
    setInput(e.target.value);
    setNodesList(filtered);
  }  

  useEffect(() => {
    detectInput();
  }, [nodesList]);
  return (
    <>
      <div>
        <input value={input} placeholder="Add a new node" onChange={updateInput} />
      </div>
      {isShown ? 
      <NodesList nodesList={nodesList} />
      :
      null
      }
    </>
  );
}

SearchParams.propTypes = {
  nodes: PropTypes.array,
};
