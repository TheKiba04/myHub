import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import "./menu.css";
const Menu = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <Box className="Menu-container">
      <IconButton onClick={onClick}>
        {isOpen ? (
          <CloseIcon sx={{ fill: "white" }} />
        ) : (
          <MenuIcon sx={{ fill: "white" }} />
        )}
      </IconButton>
    </Box>
  );
};

export default Menu;
