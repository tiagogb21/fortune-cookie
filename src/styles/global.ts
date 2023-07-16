import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font: inherit;
    vertical-align: baseline;
  }
  
  a, a:hover {
    color: inherit;
    text-decoration: none;
  }
  
  body {
    line-height: 1;
    font-family: 'Roboto', sans-serif;
    background: linear-gradient(45deg, #190361 0%, #B0F 100%);
    width: 100vw;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  button {
    border: none;
  }
  
  ol, ul {
    list-style: none;
  }
  
  :focus {
    outline: transparent;
  }
  
  button {
    cursor: pointer;
  }
`;
