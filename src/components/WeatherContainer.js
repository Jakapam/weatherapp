import React, { Component } from "react";
import SevenDayForecast from "./SevenDayForecast";
import TodaysForecast from "./TodaysForecast";

export default class WeatherContainer extends Component {
  state = {
    showingCelcius: false
  };

  handleButtonClick = () => {
    this.setState({ showingCelcius: !this.state.showingCelcius });
  };

  render() {
    const buttonName = this.state.showingCelcius
      ? "Show Fahrenheit"
      : "Show Celsius";

    return (
      <div>
        <div className="flexrow">
          <button
            className="flexcol showbutton animated bounceInDown"
            onClick={this.handleButtonClick}>
            {buttonName}
          </button>
        </div>
        <TodaysForecast showingCelcius={this.state.showingCelcius} />
        <SevenDayForecast showingCelcius={this.state.showingCelcius} />
      </div>
    );
  }
}
