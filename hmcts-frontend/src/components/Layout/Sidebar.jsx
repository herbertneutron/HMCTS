import { Drawer, List, ListItem, ListItemText, Toolbar } from "@mui/material";

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        "& .MuiDrawer-paper": {
          width: 240,
          boxSizing: "border-box"
        }
      }}
    >
      <Toolbar />
      <List>

        <ListItem>
          <ListItemText primary="Dashboard" />
        </ListItem>

        <ListItem>
          <ListItemText primary="Tasks" />
        </ListItem>

      </List>
    </Drawer>
  );
};

export default Sidebar;