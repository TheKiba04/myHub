import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
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
    <Box className="DistanceSelector">
      <Button
        variant="contained"
        onClick={handleSelect(30)}
        size="small"
      >
        Large
      </Button>
      <Button
        variant="contained"
        onClick={handleSelect(15)}
        size="small"
      >
        Medium
      </Button>
      <Button
        variant="contained"
        onClick={handleSelect(5)}
        size="small"
      >
        Small
      </Button>
    </Box>
  );
};

export default DistanceSelector;
