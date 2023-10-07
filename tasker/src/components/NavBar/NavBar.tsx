import Grid from "@mui/material/Grid";
import AssignmentIcon from "@mui/icons-material/Assignment";
import EngineeringIcon from "@mui/icons-material/Engineering";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import TaskList from "../TaskList/TaskList";
import React from "react";
import "./navbar.css";
import DefaultPage from "../DefaultPage/DefaultPage";

const SideMenu = () => {
  const [isContentOpen, setIsContentOpen] = useState<boolean>(true);
  const [selectedMenuItem, setSelectedMenuItem] = useState<string>("taskList");

  const getContent = () => {
    switch (selectedMenuItem) {
      case "taskList":
        return <TaskList />;
      default:
        return <DefaultPage type="under_constuction" />;
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
        <Grid
          item
          xs={10}
          className="Navbar-content"
          maxWidth="100%"
          minHeight="400px"
          maxHeight="400px"
          sx={{ overflowY: "auto" }}
        >
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
            id="underConstruction1"
            sx={{
              backgroundColor:
                selectedMenuItem === "underConstruction1"
                  ? "rgb(46, 47, 49)"
                  : "inherit",
            }}
          >
            <IconButton name="info" onClick={handleClick}>
              <EngineeringIcon sx={{ fill: "white" }} />
            </IconButton>
          </Grid>
          <Grid
            item
            id="underConstruction2"
            sx={{
              backgroundColor:
                selectedMenuItem === "underConstruction2"
                  ? "rgb(46, 47, 49)"
                  : "inherit",
            }}
          >
            <IconButton name="info" onClick={handleClick}>
              <EngineeringIcon sx={{ fill: "white" }} />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SideMenu;
