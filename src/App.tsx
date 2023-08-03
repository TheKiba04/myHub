import Timer from "./components/Timer/Timer";
import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import Box from "@mui/material/Box";
import theme from "./theme";
import { useState } from "react";
import DistanceSelector from "./components/DistanceSelector/DistanceSelector";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Grid from "@mui/material/Grid";
import NavBar from "./components/NavBar/NavBar";
import Menu from "./components/Menu/Menu";

const App = () => {
  const [distance, setDistance] = useState<number>(0);
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
                <Grid container rowGap={2}>
                  <Grid item xs={12}>
                    <DistanceSelector setDistance={setDistance} />
                  </Grid>
                  <Grid item xs={12}>
                    <Timer distance={distance} />
                  </Grid>
                </Grid>
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
