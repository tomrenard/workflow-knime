import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --dot-size: 1px;
    --dot-space: 22px;
    --bg-color: hsl(256,256,256);
    --dot-color: hsl(256,33,70);
  }
  body {
    font-size: 1rem;
    height: 100%;
    margin: 0;
  }
  h1,h2,h3,h4,h5 {
    margin: 0 auto;
  }
  ol, ul {
    list-style: none;
  }
`;

export default GlobalStyles;
