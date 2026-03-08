import { Box } from "@mui/material";
import Logo from "../../assets/images/MOJ.png";

const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        mb: 3,       // spacing below the header
        maxWidth: 600, // match TaskForm width
      }}
    >
      <Box
        component="img"
        src={Logo}
        alt="HMCTS Logo"
        sx={{
          height: 50,
          width: "auto",
        }}
      />
    </Box>
  );
};

export default Header;