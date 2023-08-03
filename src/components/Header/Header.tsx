import BeenhereIcon from "@mui/icons-material/Beenhere";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import "./header.css";

const Header = () => {
  return (
    <Grid container className="Header_container">
      <Grid item display="flex" alignItems="center">
        <BeenhereIcon />
      </Grid>
      <Grid item xs={3}>
        <Typography component="h1" variant="h4" gutterBottom={false}>
          myHub
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Header;
