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
      sx={{
        mb: 3,
        display: "flex",
        flexDirection: "column", 
        gap: 2,                 
        width: "fit-content"    
      }}
    >
      <TextField
        label="Title"
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        sx={{ width: 350 }}
      />

      <TextField
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        sx={{ width: 350 }}
      />

      <TextField
        type="datetime-local"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        sx={{ width: 350 }}
      />

      <Button
        variant="contained"
        type="submit"
        sx={{ width: "150px" , background: "black"}}
      >
        Add Task
      </Button>
    </Box>
  );
};

export default TaskForm;