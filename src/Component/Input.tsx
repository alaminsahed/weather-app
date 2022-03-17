import React from "react";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  input: {
    width: "60rem",
    backgroundColor: "white",
    borderRadius: "2px",
  },
  inputContainer: {
    marginTop: "3rem",
    marginLeft: "4rem",
  },
});

const Input = () => {
  const classes = useStyles();
  let navigate = useNavigate();
  const [country, setCountry] = useState(" ");
  console.log(country);

  return (
    <div className={classes.inputContainer}>
      <TextField
        id="outlined-basic"
        label="Enter country"
        variant="outlined"
        size="medium"
        className={classes.input}
        onChange={(e) => setCountry(e.target.value)}
      />
      <br />
      <br />
      <Button
        size="medium"
        variant="contained"
        disabled={!country}
        onClick={async () => {
          navigate(`countryDetails/:country`);
        }}
      >
        Search
      </Button>
    </div>
  );
};

export default Input;
