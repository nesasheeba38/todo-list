import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="static">

      <Toolbar>

        <Typography
          variant="h5"
          sx={{ flexGrow: 1 }}
        >
          Todo App
        </Typography>

        <Button
          color="inherit"
          component={Link}
          to="/"
        >
          Home
        </Button>

        <Button
          color="inherit"
          component={Link}
          to="/add"
        >
          Add Todo
        </Button>

        <Button
          color="inherit"
          component={Link}
          to="/completed"
        >
          Completed
        </Button>

      </Toolbar>

    </AppBar>
  );
};

export default Navbar;