import React, { Component } from 'react';

class Stopwatch extends Component {
  constructor(props){
    super(props);

    this.state = {
      status: 0,
      time: 0,
      startBtn: "startBtn",
      timerLabel: "timerLabel"
    }
  }

  render() {

	function start(){
        this.setState({
          status: 1,
          startBtn: true
        });

        timer();
    }
    function stop(){
      this.setState({
        status: 0,
        startBtn: false
      });
    }
    function reset(){
      this.setState({
        status: 0,
        startBtn: false,
        time: 0,
        timerLabel: '00:00:00'
      });

    }
    function timer(){
        if (this.setState.status === 1) {
            setTimeout(function() {
              this.setState({
                time: this.state.time + 1
              });
                var min = Math.floor(this.setState.time/100/60);
                var sec = Math.floor(this.setState.time/100);
                var mSec = this.setState.time % 100;
                if (min < 10) min = "0" + min;
                if (sec >= 60) sec = sec % 60;
                if (sec < 10) sec = "0" + sec;
                if (mSec < 10) mSec = "0" + mSec;

                this.setState({
                  timerLabel:  min + ":" + sec + ":" + mSec
                })

                timer();
            }, 10);
        }
    }
    document.onkeydown = function(event) { 
        if (event) {
            if (event.keyCode === 32 || event.which === 32) {
                if(this.setState.status === 1) {
                    stop();
                } else if (this.setState.status === 0) {
                    start();
                }
            }
        }
    };

    return (
        <div className="container">
        <h1 className="title">StopWatch</h1>
        <h1 id="timerLabel">00:00:00</h1>
        <input type="button" className="myButton" onClick={start} value="START" id="startBtn" />
        <input type="button" className="myButton" onClick={stop} value="STOP" />
        <input type="button" className="myButton" onClick={reset} value="RESET" />
    </div>
    );
  }
}

export default Stopwatch;
