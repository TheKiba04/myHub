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
            <Header />
            <Grid container rowGap={3}>
              <Grid item xs={12}>
                <DistanceSelector setDistance={setDistance} />
              </Grid>
              <Grid item xs={12}>
                <Timer distance={distance} />
              </Grid>
            </Grid>
          </Grid>
          {/* <Grid item xs={12} md={4}>
            <Grid container>
              <Grid item xs={12}>
                Side part
              </Grid>
            </Grid>
          </Grid> */}
          <Grid item xs={12}>
            <Footer />
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};
export default App;
