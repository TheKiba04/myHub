import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import "./footer.css";
const Footer = () => (
  <Grid container component="footer" className="App-footer">
    <Grid item xs={12}>
      <Typography variant="subtitle2">© 2023 myHub - Made in Ukraine.</Typography>
    </Grid>
  </Grid>
);

export default Footer;
