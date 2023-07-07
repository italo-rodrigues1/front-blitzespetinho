import { createGlobalStyle } from "styled-components";

const GlobalStyle: any = createGlobalStyle`
 
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
  body{
    color-scheme: light dark;
    color: rgba(255, 255, 255, 0.87);
    background-color: rgb(246 246 246);
  }
`;

export default GlobalStyle;
