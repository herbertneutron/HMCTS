import {
  Card,
  CardContent,
  Typography,
  Grid,
  Chip,
  CardActions,
  Button,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { deleteTask, updateTask } from "../services/taskService";

function TaskList({ tasks, refreshTasks }) {

  const handleDelete = async (id) => {
    await deleteTask(id);
    refreshTasks();
  };

  const toggleComplete = async (task) => {
    await updateTask(task.id, {
      completed: !task.completed,
    });

    refreshTasks();
  };

  if (tasks.length === 0) {
    return (
        <Typography align="center" sx={{ mt: 5 }}>
        No tasks yet. Add your first task 🚀
        </Typography>
    );
    }

  return (
    <Grid container spacing={3}>
      {tasks.map((task) => (
        <Grid item xs={12} key={task.id}>
          <Card elevation={3}>
            <CardContent>

              <Typography variant="h6">
                {task.title}
              </Typography>

              <Typography color="text.secondary">
                {task.description}
              </Typography>

              <Chip
                label={task.completed ? "Completed" : "Pending"}
                color={task.completed ? "success" : "warning"}
                sx={{ mt: 1 }}
              />

            </CardContent>

            <CardActions>

              <Button
                startIcon={<CheckCircleIcon />}
                color="success"
                onClick={() => toggleComplete(task)}
              >
                {task.completed ? "Undo" : "Complete"}
              </Button>

              <Button
                startIcon={<DeleteIcon />}
                color="error"
                onClick={() => handleDelete(task.id)}
              >
                Delete
              </Button>

            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default TaskList;