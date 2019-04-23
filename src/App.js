import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "./styles.css";
import { days, months, API } from "./misc.js";
import { scheduleAPI } from "./misc.js";
import { holidayAPI } from "./misc";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: "null",
      descrip1: "",
      descrip2: "",
      temp: 0,
      tempMin: 0,
      tempMax: 0,
      schState: [[0], [1], [2], [3], [4], [5], [6]],
      holidayName: ""
    };
  }

  componentWillMount() {
    axios.get(API).then(res =>
      this.setState({
        weatherData: res,
        descrip1: res.data.weather[0].main,
        descrip2: res.data.weather[0].description,
        temp: res.data.main.temp,
        tempMin: Math.round(res.data.main.temp_min),
        tempMax: Math.round(res.data.main.temp_max)
      })
    );
    axios.get(scheduleAPI).then(res => this.setState({ schState: res.data }));
    let d = new Date();
    let year = d.getFullYear();
    let month = d.getMonth();
    month = month + 1;
    if (month < 10) {
      month = `0${month}`;
    }
    let day = d.getDate();
    if (day < 10) {
      day = `0${day}`;
    }
    let today = `${year}-${month}-${day}`;
    axios
      .get(holidayAPI)
      .then(res =>
        this.setState({ holidayName: res.data.holidays[today][0].name })
      );
  }

  timeOfDay = () => {
    let d = new Date();
    if (d.getHours() < 12) {
      return <div className="title">Good Morning, Jacob</div>;
    } else if (d.getHours() >= 12 && d.getHours() < 18) {
      return <div className="title">Good Afternoon, Jacob</div>;
    } else return <div className="title">Good Evening, Jacob</div>;
  };
  /*
  listLoop = () => {
    let d = new Date().getDay();
    let daschedule = [];
    for (let i = 0; i < schedule[d].length; i++) {
      daschedule.push(
        <tr>
          <td>{schedule[d][i]}</td>
        </tr>
      );
    }
    return daschedule;
  };
  */
  listLoop = () => {
    let d = new Date().getDay();
    let daschedule = [];
    for (let i = 0; i < this.state.schState[d].length; i++) {
      daschedule.push(
        <tr>
          <td>{this.state.schState[d][i]}</td>
        </tr>
      );
    }
    return daschedule;
  };

  render() {
    let d = new Date();
    return (
      <div className="fuck">
        <br />
        {this.timeOfDay()}
        <br style={{ lineHeight: "1.6" }} />
        <div className="title2"> &nbsp;Happy {days[d.getDay()]}!</div>

        <div className="title3">
          {" "}
          &nbsp;{months[d.getMonth()]} {d.getDate()}, {d.getFullYear()}{" "}
        </div>
        <div className="title3"> &nbsp;{this.state.holidayName}</div>
        <br style={{ lineHeight: "1.3" }} />

        <div className="App">
          <div className="weather">Here's Today's Agenda</div>
          <table id="list">{this.listLoop()}</table>
          <br />
          <div className="weather">Weather for today in Eugene, OR</div>
          <div className="weather2">
            <span style={{ fontWeight: "bold" }}>
              {this.state.descrip1} ({this.state.descrip2})
            </span>
          </div>
          <div className="weather2">
            current temp{" "}
            <span style={{ fontWeight: "bold" }}>{this.state.temp}&deg;F</span>
          </div>
          <div className="weather2">
            range{" "}
            <span style={{ fontWeight: "bold" }}>
              {this.state.tempMin}&deg;
            </span>
            &nbsp;-&nbsp;
            <span style={{ fontWeight: "bold" }}>
              {this.state.tempMax}&deg;F
            </span>
          </div>
        </div>
      </div>
    );
  }
}
