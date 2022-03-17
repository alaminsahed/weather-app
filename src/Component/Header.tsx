import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  navColor: {
    backgroundColor: "#263238",
    textAlign: "center",
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <div>
      <Box sx={{ flexGrow: 1 }} color="dark">
        <AppBar position="static">
          <Toolbar className={classes.navColor}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Weather app
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Header;
