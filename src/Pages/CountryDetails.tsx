import React from "react";
import { makeStyles } from "@mui/styles";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import CountryInfo from "../Component/CountryInfo";
import { Button } from "@mui/material";
import WeatherInfo from "../Component/WeatherInfo";

const useStyles = makeStyles({
  home: {
    maxWidth: "80rem",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "2rem",
    backgroundColor: "#4db6ac",
    minHeight: "100vh",
  },
  btn: {
    marginLeft: "5rem",
    marginTop: "2rem",
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

type weatherData = {
  temperature: number;
  weather_icons: string[];
  wind_speed: number;
  precip: number;
};

const CountryDetails = () => {
  let params = useParams();
  const classes = useStyles();

  const [countryInfo, setCountryInfo] = useState<countryData>();
  const [weather, setWeather] = useState<weatherData>();
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

  const fetchWeatherData = () => {
    try {
      axios
        .get(
          `http://api.weatherstack.com/current?access_key=6cd8b4724ba9ef2368407fdb39621a0e&query=${params.country}`
        )
        .then((res) => setWeather(res.data));
    } catch (error) {
      console.log(error);
    }
  };

  console.log(weather);

  return (
    <div className={classes.home}>
      <CountryInfo key={Math.random()} countryInfo={countryInfo} />
      <div className={classes.btn}>
        <Button size="medium" variant="contained" onClick={fetchWeatherData}>
          Capital Weather
        </Button>
      </div>
      {weather ? <WeatherInfo key={Math.random()} weather={weather} /> : null}
    </div>
  );
};

export default CountryDetails;
