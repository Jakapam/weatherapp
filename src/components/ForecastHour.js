import React, { Component } from "react";

const ForecastHour = props => {
  const cOrF = props.isCelcius ? "C" : "F";
  const timestamp = new Date(props.weatherdata.dateTimeISO);
  const temp = props.weatherdata[`temp${cOrF}`] + ` °${cOrF}`;
  const feelsLike = props.weatherdata[`avgFeelslike${cOrF}`] + ` °${cOrF}`;

  console.log(props.weatherdata);
  return (
    <div className={"flexcol"}>
      <h3>{timestamp.toLocaleTimeString()}</h3>
      <img src={require(`../icons/${props.weatherdata.icon}`)} alt="" />
      <p>Temp: {temp}</p>
      <p>Feels Like: {feelsLike}</p>
    </div>
  );
};

export default ForecastHour;
