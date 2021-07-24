import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Roboto', sans-serif;
    }

    body {
      color: #f5f5f1;
      background-color: #221f1f;
    }
`;

export default GlobalStyle;
