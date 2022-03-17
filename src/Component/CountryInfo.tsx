import React from "react";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  mainText: {
    textAlign: "center",
    fontSize: "25px",
    color: "white",
    paddingTop: "10px",
    fontWeight: "bolder",
  },

  countryInfo: {
    marginLeft: "5rem",
    marginRight: "5rem",
    marginTop: "3rem",
    border: "solid",
    borderColor: "white",
  },

  countryContainer: {
    padding: "2rem",
  },
});

const CountryInfo = (props: any) => {
  const classes = useStyles();
  const { countryInfo } = props;

  return (
    <div>
      <h3 className={classes.mainText}>Country Information</h3>
      <div className={classes.countryInfo}>
        <div className={classes.countryContainer}>
          <h4>Capital: {countryInfo?.capital}</h4>
          <h4>Population: {countryInfo?.population}</h4>
          <h4>Lating: {countryInfo?.latlng}</h4>
          <br />
          <img
            src={countryInfo?.flags.svg}
            height="140rem"
            width="140rem"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default CountryInfo;
