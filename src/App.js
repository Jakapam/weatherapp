import React, { Component } from "react";
import WeatherContainer from "./components/WeatherContainer";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="header flexrow">My Weather App</h1>
        <WeatherContainer />
      </div>
    );
  }
}

export default App;
