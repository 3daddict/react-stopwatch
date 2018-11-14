import stopwatch from '../assets/css/stopwatch.css';
import React, { Component } from 'react';

class Stopwatch extends Component {
  render() {
    return (
        <div className="container">
        <h1 className="title">StopWatch</h1>
        <h1 id="timerLabel">00:00:00</h1>
        <input type="button" className="myButton" onclick="start()" value="START" id="startBtn" />
        <input type="button" className="myButton" onclick="stop()" value="STOP" />
        <input type="button" className="myButton" onclick="reset()" value="RESET" />
    </div>
    );
  }
}

export default Stopwatch;
