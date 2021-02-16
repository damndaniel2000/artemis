import { createMuiTheme } from "@material-ui/core";

const red1 = "#ff0800";
const red2 = "#ff0800";

export default createMuiTheme({
  palette: {
    common: {
      red1: red1,
      red2: red2,
    },
    primary: {
      main: red1,
      contrastText: "#fff",
    },
    secondary: {
      main: red2,
      contrastText: "#fff",
    },
  },

  typography: {
    fontFamily: [
      "Zilla Slab",
      "Roboto",
      '"Helvetica"',
      "Arial",
      "sans-serif",
    ].join(","),

    button: {
      fontFamily: "rajdhani",
      fontWeight: 600,
      textTransform: "capitalize",
    },
    span: {
      color: "#fff",
    },
  },
});
