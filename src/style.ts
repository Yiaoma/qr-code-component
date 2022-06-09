import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  html {
    box-sizing: border-box;
    font-family: 'Outfit', sans-serif;
  }

  body {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #D5E1EF;
  }
`;
