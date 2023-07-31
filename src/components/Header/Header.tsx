import BeenhereIcon from "@mui/icons-material/Beenhere";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "./header.css";

const Header = () => {
  return (
    <Box className="Header_container">
      <BeenhereIcon />
      <Typography component="h1" variant="h4" gutterBottom={false}>
        myHub
      </Typography>
    </Box>
  );
};

export default Header;
