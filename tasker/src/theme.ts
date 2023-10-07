import { createTheme } from "@mui/material/styles";

let theme = createTheme({
    palette: {
        primary: {
            main: "rgb(99, 108, 115)",
        },
    },
    components: {
      MuiInputLabel: {
        styleOverrides: {
          root: {
            color: "gray",
            "&:focus": {
              color: "white",
            },
          },
        },
      },
      MuiInputBase:{
        styleOverrides: {
          root: {
            color: 'white',
            // "&:active": {
              borderBottom: "none!important",
            // },
            '&:before': {
              borderBottom: "1px solid gray!important" ,
              
                "&:hover": {
                  borderBottom: "1px solid gray" 
                },
            }
        }
      },
    } 
      }
});

theme.typography.caption = {
    fontSize: "7em",
    [theme.breakpoints.up("md")]: {
      fontSize: "14em"
    }
  };


export default theme;
