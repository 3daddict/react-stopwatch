import React, { Component } from 'react';
import './assets/css/stopwatch.css';
import Stopwatch from './components/stopwatch';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Stopwatch />
      </div>
    );
  }
}

export default App;
