import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import EngineeringIcon from "@mui/icons-material/Engineering";
import { size, space } from "../../design-system";

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
            gap: space[2],
            paddingTop: "20%",
          }}
        >
          <EngineeringIcon
            sx={{
              width: size.icon.xl,
              height: size.icon.xl,
              color: "text.primary",
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
