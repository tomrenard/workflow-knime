import styled from "styled-components";

const NodesStyles = styled.ul`
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
      box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px,
        rgba(0, 0, 0, 0.24) 0px 1px 2px;
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

export default NodesStyles;
