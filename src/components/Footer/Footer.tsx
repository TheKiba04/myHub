import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import "./footer.css";
const Footer = () => (
  <Grid container component="footer" className="App-footer">
    <Grid item xs={12}>
      <Typography variant="caption">© 2023 myHub</Typography>
    </Grid>
  </Grid>
);

export default Footer;
