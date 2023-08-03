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

const App = () => {
  const [distance, setDistance] = useState<number>(0);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box component="main" className="App">
        <Grid container className="App-container">
          <Grid item xs={8}>
            <Grid container component="section">
              <Grid item xs={12}>
                <Header />
              </Grid>
              <Grid item xs={12}>
                <DistanceSelector setDistance={setDistance} />
                <Timer distance={distance} />
              </Grid>
              <Grid item xs={12}>
                <Footer />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Grid container component="section">
              <Grid item xs={12}>
                Side part
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};
export default App;
