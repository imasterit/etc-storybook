import { ThemeType } from "grommet";

export const oldTheme = {
  COLORS: {
    white: "#ffffff",
    lightGray: "#a9a9a9",
    redOrange: "#fb920b",
    gray: "#808080",
    transparentGray: "#19191975",
    purple: "#e3c8e6",
    purpleTransparent: "#e3c8e699",
    green: "#c0ff00",
    greenTransparent: "#c0ff0099",
    blue: "#0cc0ff",
    black: "#3c3c3c",
    yellow: "ffff00",
    yellowTransparent: "#ffff0099"
  },
  main: "mediumseagreen"
};

export const theme: ThemeType = {
  global: {
    font: {
      family: "Roboto"
    },
    colors: {
      ...oldTheme.COLORS
    }
  },
  table: {
    footer: {
      border: undefined
    }
  }
};
