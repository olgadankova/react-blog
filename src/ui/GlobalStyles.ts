import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*, *::before, *::after {
  margin: 0;
  padding: 0; 
  font-family: Inter, sans-serif;
  box-sizing: border-box;
  text-decoration: none;
}
`;
