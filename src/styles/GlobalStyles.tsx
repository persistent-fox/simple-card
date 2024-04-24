import { createGlobalStyle } from "styled-components";
import { MyTheme } from "./MyTheme.styled";

export const GlobalStyles = createGlobalStyle`
  *, 
  *:before, 
  *:after {
    font-family: ${MyTheme.fonts.mainFont};
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
  }
  li {
    list-style: none;
  }
  button {
    cursor: pointer;
  }
`;
