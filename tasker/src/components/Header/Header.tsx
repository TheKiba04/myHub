import BeenhereIcon from "@mui/icons-material/Beenhere";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import "./header.css";

const Header = () => {
  return (
    <Grid container className="Header_container">
      <Grid item className="Header_icon_container">
        <BeenhereIcon />
      </Grid>
      <Grid item>
        <Typography component="h1" variant="h4" gutterBottom={false}>
          myHub - Task Manager
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Header;
