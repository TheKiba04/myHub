import Grid from "@mui/material/Grid";
import AssignmentIcon from "@mui/icons-material/Assignment";
import InfoIcon from "@mui/icons-material/Info";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import TaskList from "../TaskList/TaskList";
import React from "react";
import "./navbar.css";

const SideMenu = () => {
  const [isContentOpen, setIsContentOpen] = useState<boolean>(true);
  const [selectedMenuItem, setSelectedMenuItem] = useState<string>("taskList");

  const getContent = () => {
    switch (selectedMenuItem) {
      case "taskList":
        return <TaskList />;
      case "info":
        return (
          <>
            <div
              style={{
                minHeight: "400px",
              }}
            >
              INFO
            </div>
          </>
        );
      default:
        return <TaskList />;
    }
  };

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setIsContentOpen(true);
    setSelectedMenuItem(event.currentTarget.name);
  };
  return (
    <Grid
      container
      justifyContent="flex-end"
      sx={{ flexDirection: { xs: "column-reverse", md: "row" } }}
    >
      {isContentOpen && (
        <Grid item xs={10} maxWidth="100%" className="Navbar-content">
          {getContent()}
        </Grid>
      )}
      <Grid item>
        <Grid container sx={{ flexDirection: { xs: "row", md: "column" } }}>
          <Grid
            item
            id="taskList"
            sx={{
              backgroundColor:
                selectedMenuItem === "taskList" ? "rgb(46, 47, 49)" : "inherit",
            }}
          >
            <IconButton name="taskList" onClick={handleClick}>
              <AssignmentIcon sx={{ fill: "white" }} />
            </IconButton>
          </Grid>
          <Grid
            item
            id="info"
            sx={{
              backgroundColor:
                selectedMenuItem === "info" ? "rgb(46, 47, 49)" : "inherit",
            }}
          >
            <IconButton name="info" onClick={handleClick}>
              <InfoIcon sx={{ fill: "white" }} />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SideMenu;
