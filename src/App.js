import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "./styles.css";
import { days, months, API } from "./misc.js";
import { scheduleAPI } from "./misc.js";
import { holidayAPI } from "./misc";
import { newsAPI } from "./misc";
import SplitText from "react-pose-text";

const charPoses = {
  exit: { opacity: 0, y: 20 },
  enter: {
    opacity: 1,
    y: 0,
    delay: ({ charIndex }) => charIndex * 100
  }
};

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
      holidayName: "",
      news: []
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
        this.axiosHolidays(res)
      );
    axios.get(newsAPI).then(res => this.setState({ news: res.data.articles }));
  }

  axiosHolidays = (res) => {
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
    if (res.data.holidays[today] === undefined) {
      console.log('no holidays today')
    } else {
      this.setState({holidayName: res.data.holidays[today][0].name})
    }
  }

  timeOfDay = () => {
    let d = new Date();
    if (d.getHours() < 12) {
      return (
        <div className="title">
          <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
            Good Morning, Jacob
          </SplitText>
        </div>
      );
    } else if (d.getHours() >= 12 && d.getHours() < 18) {
      return (
        <div className="title">
          <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
            Good Afternoon, Jacob
          </SplitText>
        </div>
      );
    } else
      return (
        <div className="title">
          <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
            Good Evening, Jacob
          </SplitText>
        </div>
      );
  };

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

  newsHandler = () => {
    if (this.state.news.length < 1) {
      return <div>&nbsp;</div>;
    } else {
      let arrTest = [];
      for (let i = 0; i < 6; i++) {
        arrTest.push(
          <a
            style={{ color: "white", fontWeight: "bold", textShadow: "2px 2px 4px black" }}
            href={this.state.news[i].url}
          >
            {this.state.news[i].title}
          </a>
        );
        arrTest.push(<br />);
      }
      return arrTest;
    }
  };

  holidayHandler = () => {
    if (this.state.holidayName.length < 1) {
      return <span />;
    } else {
      return this.state.holidayName;
    }
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
        <div className="title3"> &nbsp;{this.holidayHandler()}</div>
        <br style={{ lineHeight: "1.3" }} />
        <div className="App">
          <div className="weather">
            <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
              Here's Today's Agenda
            </SplitText>
          </div>
          <table id="list">{this.listLoop()}</table>

          <div className="weather">
            <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
              News Headlines
            </SplitText>
          </div>
          <div>{this.newsHandler()}</div>

          <div className="weather">
            <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
              Weather rn in Eugene
            </SplitText>
          </div>
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
