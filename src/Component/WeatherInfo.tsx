import React from "react";
import { useStyles } from "./CountryInfo";

const WeatherInfo = (props: any) => {
  const classes = useStyles();
  const { weather } = props;

  return (
    <div>
      <h3 className={classes.mainText}>Weather Information</h3>
      <div className={classes.countryInfo}>
        <div className={classes.countryContainer}>
          <h4>Temperature:{weather?.current.temperature} </h4>
          <h4>Wind Speed: {weather?.current.wind_speed}</h4>
          <h4>precip: {weather?.current.precip}</h4>
          <br />
          <img
            src={weather?.current.weather_icons}
            height="140rem"
            width="140rem"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
