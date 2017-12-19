import React, { Component } from "react";
import ForecastHour from "./ForecastHour";
import { fetchSevenHour } from "../utils/apiCalls";

export default class TodaysForecast extends Component {
  state = {
    forecastArray: []
  };

  componentDidMount() {
    fetchSevenHour().then(data =>
      this.setState({ forecastArray: data.response[0].periods })
    );
  }

  render() {
    console.log(this.state.forecastArray);
    const forecastList = this.state.forecastArray.map(
      (forecastElement, index) => {
        return (
          <ForecastHour
            key={index}
            weatherdata={forecastElement}
            isCelcius={this.props.showingCelcius}
          />
        );
      }
    );
    return (
      <div>
        <h2 className="centerText animated fadeInDown">The next Seven hours</h2>
        <div className="flexrow animated fadeIn">{forecastList}</div>
      </div>
    );
  }
}
