import React from "react";
import { makeStyles } from "@mui/styles";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const useStyles = makeStyles({
  home: {
    maxWidth: "80rem",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "2rem",
    backgroundColor: "#4db6ac",
    minHeight: "100vh",
  },
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

type countryData = {
  capital: string[];
  population: number;
  latlng: number[];
  flags: {
    svg: string;
  };
};

const CountryDetails = () => {
  let params = useParams();
  const classes = useStyles();

  const [countryInfo, setCountryInfo] = useState<countryData>();
  console.log("c", countryInfo);

  useEffect(() => {
    const fetchCountryData = () => {
      try {
        axios
          .get(`https://restcountries.com/v3.1/name/${params.country}`)
          .then((res) => setCountryInfo(res.data[0]));
      } catch (error) {
        console.log(error);
      }
    };
    fetchCountryData();
  }, [params.country]);

  return (
    <div className={classes.home}>
      <div>
        <h3 className={classes.mainText}>Country Information</h3>
        <div className={classes.countryInfo}>
          <div className={classes.countryContainer}>
            <h4>Capital: {countryInfo?.capital}</h4>
            <h4>Population: {countryInfo?.population}</h4>
            <h4>Lating: {countryInfo?.latlng}</h4>
            <img
              src={countryInfo?.flags.svg}
              height="140rem"
              width="140rem"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
