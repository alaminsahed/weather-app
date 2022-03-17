import React from "react";
import Header from "../Component/Header";
import InputContainer from "../Component/Input";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  home: {
    maxWidth: "80rem",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "2rem",
    backgroundColor: "#4db6ac",
    minHeight: "100vh",
  },
});

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.home}>
      <Header />
      <InputContainer />
    </div>
  );
};

export default Home;
