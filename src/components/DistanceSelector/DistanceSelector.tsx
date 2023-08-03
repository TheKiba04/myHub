import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import "./distanceSelector.css";

const DistanceSelector = ({
  setDistance,
}: {
  setDistance: (distance: number) => void;
}) => {
  const handleSelect = (distance: number) => () => {
    setDistance(distance);
  };
  return (
    <Grid container className="DistanceSelector">
      <Grid item>
        <Button variant="contained" onClick={handleSelect(30)} size="small">
          Large
        </Button>
      </Grid>
      <Grid item>
        <Button variant="contained" onClick={handleSelect(15)} size="small">
          Medium
        </Button>
      </Grid>
      <Grid item>
        <Button variant="contained" onClick={handleSelect(5)} size="small">
          Small
        </Button>
      </Grid>
    </Grid>
  );
};

export default DistanceSelector;
