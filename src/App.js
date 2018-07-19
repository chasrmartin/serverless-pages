// -*-mode: rjsx -*-
import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import CountedText from './CountedText';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Morning Pages For Everyone</h1>
        </header>
        <p className="App-intro">
          This is an app for writing morning pages: 750 words of stream
          of consciousness, written every day. 
        </p>
        <CountedText />
      </div>
    );
  }
}

export default App;
