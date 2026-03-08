import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
  Chip,
  TableContainer,
  Paper,
  Stack,
  TablePagination
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { deleteTask, updateTask } from "../../services/taskService";
import EditTaskModal from "./EditTaskModal";

const TaskTable = ({ tasks, refresh }) => {
  const [editingTask, setEditingTask] = useState(null);

  // Pagination state
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(1);

  const handleDelete = async (id) => {
    try {
      await deleteTask(id);
      refresh();
    } catch (error) {
      console.error("Failed to delete task:", error);
    }
  };

  const handleComplete = async (task) => {
    try {
      await updateTask(task.id, { status: "completed" });
      refresh();
    } catch (error) {
      console.error("Failed to update task:", error);
    }
  };

  const getStatusChip = (status) => (
    <Chip
      label={status === "completed" ? "Completed" : "Pending"}
      color={status === "completed" ? "success" : "warning"}
    />
  );

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); 
  };

  
  const paginatedTasks = tasks.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <>
      <TableContainer component={Paper} sx={{ mt: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><b>Title</b></TableCell>
              <TableCell><b>Description</b></TableCell>
              <TableCell><b>Status</b></TableCell>
              <TableCell><b>Due Date</b></TableCell>
              <TableCell><b>Actions</b></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {paginatedTasks.map((task) => (
              <TableRow key={task.id}>
                <TableCell>{task.title}</TableCell>
                <TableCell>{task.description}</TableCell>
                <TableCell>{getStatusChip(task.status)}</TableCell>
                <TableCell>
                  {task.dueDateTime
                    ? new Date(task.dueDateTime).toLocaleString()
                    : "-"}
                </TableCell>
                <TableCell>
                  <Stack direction="row" spacing={1}>
                    <Button
                      variant="outlined"
                      startIcon={<EditIcon />}
                      onClick={() => setEditingTask(task)}
                    >
                      Edit
                    </Button>

                    {task.status !== "completed" && (
                      <Button
                        variant="contained"
                        color="success"
                        startIcon={<CheckCircleIcon />}
                        onClick={() => handleComplete(task)}
                      >
                        Complete
                      </Button>
                    )}

                    <Button
                      variant="outlined"
                      color="error"
                      startIcon={<DeleteIcon />}
                      onClick={() => handleDelete(task.id)}
                    >
                      Delete
                    </Button>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

       
        <TablePagination
          component="div"
          count={tasks.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={[1,5, 10, 25]}
        />
      </TableContainer>

      <EditTaskModal
        task={editingTask}
        close={() => setEditingTask(null)}
        refresh={refresh}
      />
    </>
  );
};

export default TaskTable;