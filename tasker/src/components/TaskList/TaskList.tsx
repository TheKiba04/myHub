import Grid from "@mui/material/Grid";
import TaskCreator from "../TaskCreator/TaskCreator";
import { IconButton, Radio, Typography } from "@mui/material";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

export interface Task {
  id: number;
  name: string;
  time: string;
}

const TaskList = () => {
  const [tasks, setTasks] = useState<Task[] | []>([]);
  const [activeRadio, setActiveRadio] = useState<number>(0);
  const handleActiveRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    setActiveRadio(Number(event.target.value));
  };

  const handleCreateNewTask = (newTask: string) => {
    setTasks((prev) => [
      ...prev,
      { id: prev.length + 1, name: newTask, time: "" },
    ]);
  };
const handleDeleteTask = (id: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }

  return (
    <Grid container>
      <Grid item xs={12}>
        <TaskCreator onAdd={handleCreateNewTask} />
      </Grid>

      {tasks.map((task) => (
        <Grid item key={task.id} xs={12} p={1} borderBottom="1px solid gray">
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item xs={1} color="primary">
              <Radio
                checked={task.id === activeRadio}
                value={task.id}
                onChange={handleActiveRadio}
              />
            </Grid>
            <Grid item xs={10}>
              <Typography textAlign="left">{task.name}</Typography>
            </Grid>
            <Grid item xs={1}>
              <IconButton sx={{ width: "1em", height: "1em" }}>
                <CloseIcon
                  color="primary"
                  onClick={() => handleDeleteTask(task.id)}
                  sx={{ width: ".6em", height: ".6em" }}
                />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      ))}
      {tasks.length === 0 && (
        <Grid item xs={12}>
          <Typography variant="body1" fontStyle='italic' textAlign="center">
            No tasks for now...
          </Typography>
          </Grid>
      )}
    </Grid>
  );
};

export default TaskList;
