import React, { Component } from "react";

const ForecastItem = props => {
  const cOrF = props.isCelcius ? "C" : "F";
  const timestamp = new Date(props.weatherdata.dateTimeISO);
  const high = props.weatherdata[`maxTemp${cOrF}`] + ` °${cOrF}`;
  const low = props.weatherdata[`minTemp${cOrF}`] + ` °${cOrF}`;

  return (
    <div className={"flexcol"}>
      <h3>{timestamp.toLocaleDateString()}</h3>
      <img src={require(`../icons/${props.weatherdata.icon}`)} alt="" />
      <p>High: {high}</p>
      <p>Low: {low}</p>
    </div>
  );
};

export default ForecastItem;
