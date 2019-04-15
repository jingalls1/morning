import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "./styles.css";
import { days, months, API } from "./misc.js";
import { schedule } from "./misc.js";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: "null",
      descrip1: "",
      descrip2: "",
      temp: 0,
      tempMin: 0,
      tempMax: 0
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
  }

  timeOfDay = () => {
    let d = new Date();
    if (d.getHours() < 12) {
      return <div className="title">Good Morning, Jacob</div>;
    } else if (d.getHours() >= 12 && d.getHours() < 6) {
      return <div className="title">Good Afternoon, Jacob</div>;
    } else return <div className="title">Good Evening, Jacob</div>;
  };
  /*
  listLoop = () => {
    let d = new Date().getDay();
    let daschedule = [];
    for (let i = 0; i < schedule[d].length; i++) {
      daschedule.push(<li>{schedule[d][i]}</li>);
    }
    return daschedule;
  };
  */
  listLoop = () => {
    let d = new Date().getDay();
    let daschedule = [];
    for (let i = 0; i < schedule[d].length; i++) {
      daschedule.push(<tr><td>{schedule[d][i]}</td></tr>);
    }
    return daschedule;
  };

  render() {
    let d = new Date();
    return (
      <div className="fuck" width={window.innerWidth}>
        <br />
        {this.timeOfDay()}
        <br style={{ lineHeight: "1.6" }} />
        <div className="title2"> &nbsp;Happy {days[d.getDay()]}!</div>
        <div className="title3">
          {" "}
          &nbsp;{months[d.getMonth()]} {d.getDate()}, {d.getFullYear()}{" "}
        </div>
        <br style={{ lineHeight: "1.4" }} />
        <div className="App">
          <div className="weather">Here's Today's Agenda</div>
          <table id="list">
          {this.listLoop()}
          </table>
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
