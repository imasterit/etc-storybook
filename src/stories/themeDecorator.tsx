import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../components/flowDiagram/theme";
import { Grommet } from "grommet";

export const themeDecorator = (storyFn: () => React.ReactNode) => (
  <ThemeProvider theme={theme}>
    <Grommet theme={theme}>{storyFn()}</Grommet>
  </ThemeProvider>
);
