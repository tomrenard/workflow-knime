import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    font-size: 1rem;
    height: 100%;
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
  }
  h1,h2,h3,h4,h5 {
    margin: 0 auto;
  }
  ol, ul {
    list-style: none;
  }
  .node-li {
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
  .nodes-dnd {
    display: flex;
    justify-content: center;
    padding: 0;
    margin: 1rem;
    @media (max-width: 740px) {
      flex-direction: column;
    }
  }
`;

export default GlobalStyles;
