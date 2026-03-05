import { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { createTask } from "../../services/taskService";

const TaskForm = ({ refresh }) => {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    await createTask({
      title,
      description,
      status: "pending",
      dueDate
    });

    setTitle("");
    setDescription("");
    setDueDate("");

    refresh();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ mb: 3 }}
    >

      <TextField
        label="Title"
        fullWidth
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        sx={{ mb: 2 }}
      />

      <TextField
        label="Description"
        fullWidth
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        sx={{ mb: 2 }}
      />

      <TextField
        type="datetime-local"
        fullWidth
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        sx={{ mb: 2 }}
      />

      <Button
        variant="contained"
        type="submit"
      >
        Add Task
      </Button>

    </Box>
  );
};

export default TaskForm;