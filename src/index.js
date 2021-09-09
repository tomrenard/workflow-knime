import ReactDOM from "react-dom";
import React, { useState } from "react";
import GlobalStyles from "./styles/GlobalStyles";
import Workflow from "./components/Workflow";
import data from "./data/data";

function App() {
  const [nodes] = useState(data);
  return (
    <>
      <GlobalStyles />
      <Workflow nodes={nodes} />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
