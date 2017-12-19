import React, { Component } from "react";
import ForecastItem from "./ForecastItem";
import { fetchSevenDay } from "../utils/apiCalls";

export default class SevenDayForecast extends Component {
  state = {
    forecastArray: []
  };

  componentDidMount() {
    fetchSevenDay().then(data =>
      this.setState({ forecastArray: data.response[0].periods })
    );
  }

  render() {
    const forecastList = this.state.forecastArray.map(
      (forecastElement, index) => {
        return (
          <ForecastItem
            key={index}
            weatherdata={forecastElement}
            isCelcius={this.props.showingCelcius}
          />
        );
      }
    );

    return (
      <div>
        <h2 className="centerText animated fadeInDown">
          The Seven Day Forecast
        </h2>
        <div className="flexrow animated fadeIn">{forecastList}</div>
      </div>
    );
  }
}
