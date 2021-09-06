import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import Workflow from "./components/Workflow";
import nodes from "./data/nodes";

function App() {
  return (
    <>
      <GlobalStyles />
      <Workflow nodes={nodes} />
    </>
  );
}

export default App;
