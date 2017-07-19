import React, { Component } from "react";
import moment from "moment";
import "../styles/App.css";
import earthquakes from "../data/earthquakes";
import EarthquakeInfo from "./EarthquakeInfo";
import EarthquakeList from "./EarthquakeList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="title">
          <div className="my-header">EarthQuakes!!</div>
        </div>
        <EarthquakeInfo />
        <EarthquakeList />
      </div>
    );
  }
}

export default App;
