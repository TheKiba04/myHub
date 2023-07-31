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

const App = () => {
  const [distance, setDistance] = useState<number>(0);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box component="main" className="App">
        <Box component="section" className="App-container">
          <Header />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <DistanceSelector setDistance={setDistance} />
            <Timer distance={distance} />
          </Box>
          <Footer />
        </Box>
      </Box>
    </ThemeProvider>
  );
};
export default App;
