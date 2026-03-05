import { AppBar, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{ mb: 3 }}
    >
      <Toolbar>

        <Typography variant="h6">
          HMCTS Task Manager
        </Typography>

      </Toolbar>
    </AppBar>
  );
};

export default Header;