import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import EngineeringIcon from "@mui/icons-material/Engineering";

const DefaultPage = ({ type }: { type: string }) => {
  return (
    <>
      {type === "under_constuction" && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            justifyItems: "center",
            alignItems: "center",
            flexDirection: "column",
            paddingTop: "20%",
          }}
        >
          <EngineeringIcon
            sx={{
              marginLeft: "5%",
              width: "150px",
              height: "150px",
              fill: "white",
            }}
          />
          <Typography variant="subtitle2">
            This page is under construction.
          </Typography>
        </Box>
      )}
    </>
  );
};

export default DefaultPage;
