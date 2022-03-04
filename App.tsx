import React, { Fragment } from "react";
import { StatusBar } from "expo-status-bar";

import { ThemeProvider } from "styled-components";

import theme from "./src/theme";
import { Quiz } from "./src/domain/quiz";

export default function App() {
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <Quiz />
      </ThemeProvider>
      <StatusBar style="auto" />
    </Fragment>
  );
}
