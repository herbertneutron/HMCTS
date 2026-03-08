import { Grid, Paper, Typography } from "@mui/material";

function TaskStats({ tasks }) {

  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;
  const pending = total - completed;

  return (
    <Grid container spacing={2} sx={{ mb: 4 }}>

      <Grid item xs={4}>
        <Paper sx={{ p:2, textAlign:"center" }}>
          <Typography variant="h5">{total}</Typography>
          <Typography>Total Tasks</Typography>
        </Paper>
      </Grid>

      <Grid item xs={4}>
        <Paper sx={{ p:2, textAlign:"center" }}>
          <Typography variant="h5">{completed}</Typography>
          <Typography>Completed</Typography>
        </Paper>
      </Grid>

      <Grid item xs={4}>
        <Paper sx={{ p:2, textAlign:"center" }}>
          <Typography variant="h5">{pending}</Typography>
          <Typography>Pending</Typography>
        </Paper>
      </Grid>

    </Grid>
  );
}

export default TaskStats;