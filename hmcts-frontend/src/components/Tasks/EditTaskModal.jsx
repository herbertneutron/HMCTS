import { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button
} from "@mui/material";

import { updateTask } from "../../services/taskService";

const EditTaskModal = ({ task, close, refresh }) => {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
    }
  }, [task]);

  const handleSave = async () => {

    await updateTask(task.id, {
      title,
      description
    });

    refresh();
    close();
  };

  if (!task) return null;

  return (
    <Dialog open={true} onClose={close}>

      <DialogTitle>Edit Task</DialogTitle>

      <DialogContent>

        <TextField
          label="Title"
          fullWidth
          sx={{ mt: 2 }}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <TextField
          label="Description"
          fullWidth
          sx={{ mt: 2 }}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

      </DialogContent>

      <DialogActions>

        <Button onClick={close}>
          Cancel
        </Button>

        <Button
          variant="contained"
          onClick={handleSave}
        >
          Save
        </Button>

      </DialogActions>

    </Dialog>
  );
};

export default EditTaskModal;