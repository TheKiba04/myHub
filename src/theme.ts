import { createTheme } from "@mui/material/styles";

let theme = createTheme({});

theme.typography.body1 = {
    fontSize: "7em",
    [theme.breakpoints.up("md")]: {
      fontSize: "14em"
    }
  };

export default theme;
