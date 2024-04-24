import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyles } from "./styles/GlobalStyles";
import { MyTheme } from "./styles/MyTheme.styled";
import { ThemeProvider } from "styled-components";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <ThemeProvider theme={MyTheme}>
    <GlobalStyles />
    <App />
  </ThemeProvider>,
);
