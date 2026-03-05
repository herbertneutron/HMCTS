import { useState } from "react";
import { TextField, Button, Paper, Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { createTask } from "../services/taskService";

function TaskForm({ refreshTasks }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await createTask({
      title,
      description,
    });

    setTitle("");
    setDescription("");

    refreshTasks();
  };

  return (
    <Paper sx={{ p: 3, mb: 4 }}>
      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField
            label="Task Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            fullWidth
          />

          <TextField
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            fullWidth
          />

          <Button
            type="submit"
            variant="contained"
            startIcon={<AddIcon />}
          >
            Add Task
          </Button>
        </Stack>
      </form>
    </Paper>
  );
}

export default TaskForm;