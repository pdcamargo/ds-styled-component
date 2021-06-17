import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import App from "./components/App";

import { createObjectCssVariables } from "./theme/utils";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
  :root {
    ${createObjectCssVariables("colors", theme.colors)}
    ${createObjectCssVariables("radii", theme.radii)}
  }

  html {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: inherit;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />

      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
