import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import Box from "@mui/material/Box";
import theme from "./theme";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Grid from "@mui/material/Grid";
import Tracker from "./components/Tracker/Tracker";
import NavBar from "./components/NavBar/NavBar";
import Menu from "./components/Menu/Menu";
import { useState } from "react";

const App = () => {
  const [isSideContentOpen, setIsSideContentOpen] = useState<boolean>(false);

  const handleMenu = () => setIsSideContentOpen((prev) => !prev);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Menu isOpen={isSideContentOpen} onClick={handleMenu} />
      <Box className="App-wrapper">
        <Grid
          container
          className="App-container"
          justifyContent="space-between"
          flexDirection="column"
        >
          <Grid
            item
            xs={12}
            flexDirection="column"
            alignItems="center"
            flexGrow={1}
            minHeight="90%"
          >
            <Grid
              container
              justifyContent="center"
              rowGap={3}
              alignItems="center"
            >
              <Grid item xs={12} md={7}>
                <Header />
              </Grid>
              <Grid item xs={12} md={7}>
              <Tracker />
              </Grid>
              {isSideContentOpen && (
                <Grid
                  item
                  xs={12}
                  md={5}
                >
                  <NavBar />
                </Grid>
              )}
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Footer />
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};
export default App;
