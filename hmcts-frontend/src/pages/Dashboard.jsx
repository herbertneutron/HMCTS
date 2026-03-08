import { useEffect, useState } from "react";
import { Box, Container } from "@mui/material";

import Sidebar from "../components/Layout/Sidebar";
import Header from "../components/Layout/Header";

import StatsCards from "../components/Tasks/StatsCards";
import TaskTable from "../components/Tasks/TaskTable";
import TaskForm from "../components/Tasks/TaskForm";

import { getTasks } from "../services/taskService";

const Dashboard = () => {

  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    const res = await getTasks();
    setTasks(res.data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (

    <Box sx={{ display: "flex" }}>

      {/* <Sidebar /> */}

      <Container sx={{ mt: 3 }}>

        <Header />

        <StatsCards tasks={tasks} />

        <TaskForm refresh={loadTasks} />

        <TaskTable
          tasks={tasks}
          refresh={loadTasks}
        />

      </Container>

    </Box>
  );
};

export default Dashboard;