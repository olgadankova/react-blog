import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
button {
  font-family: inherit;
  border: 0;
  background: none;
  outline: none;
}
body {
  font-family: 'Inter', sans-serif;
}
`;
