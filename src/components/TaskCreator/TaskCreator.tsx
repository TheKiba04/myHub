import { Button, TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import "./taskCreator.css";
import { useState } from "react";

interface TaskCreatorProps {
  onAdd: (task: string) => void;
}

const TaskCreator = ({ onAdd }: TaskCreatorProps) => {
  const [newTask, setNewTask] = useState<string>("");

  const handleNewTask = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value);
  };

  const handleAdd = () => {
    if (newTask.trim() !== "") {
      onAdd(newTask);
    }
    setNewTask("");
  };

  return (
    <Grid
      container
      p={2}
      gap={1}
      className="TaskCreator-container"
      justifyContent="space-between"
    >
      <Grid item xs={9}>
        <TextField
          label="Task name"
          variant="standard"
          fullWidth
          value={newTask}
          onChange={handleNewTask}
        />
      </Grid>
      <Grid
        item
        xs={2}
        display="flex"
        justifyContent="center"
        alignItems="flex-end"
      >
        <Button
          variant="contained"
          sx={{ backgroundColor: "rgb(99, 108, 115)" }}
          size="small"
          onClick={handleAdd}
        >
          Add
        </Button>
      </Grid>
    </Grid>
  );
};

export default TaskCreator;
