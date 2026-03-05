import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
  Chip
} from "@mui/material";

import { deleteTask, updateTaskStatus } from "../../services/taskService";

const TaskTable = ({ tasks, refresh }) => {

  const handleComplete = async (task) => {
    await updateTaskStatus(task.id, "completed");
    refresh();
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    refresh();
  };

  return (

    <Table>

      <TableHead>

        <TableRow>
          <TableCell>Title</TableCell>
          <TableCell>Description</TableCell>
          <TableCell>Status</TableCell>
          <TableCell>Due Date</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>

      </TableHead>

      <TableBody>

        {tasks.map((task) => (

          <TableRow key={task.id}>

            <TableCell>{task.title}</TableCell>

            <TableCell>{task.description}</TableCell>

            <TableCell>

              <Chip
                label={task.status}
                color={
                  task.status === "completed"
                    ? "success"
                    : "warning"
                }
              />

            </TableCell>

            <TableCell>
              {task.dueDate}
            </TableCell>

            <TableCell>

              <Button
                variant="contained"
                sx={{ mr: 1 }}
                onClick={() => handleComplete(task)}
              >
                Complete
              </Button>

              <Button
                variant="outlined"
                color="error"
                onClick={() => handleDelete(task.id)}
              >
                Delete
              </Button>

            </TableCell>

          </TableRow>

        ))}

      </TableBody>

    </Table>

  );
};

export default TaskTable;