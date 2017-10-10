import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NameLabel from './components/NameLabel';

class App extends Component {
  render() {
    return (
      <div className="App-main">
        <NameLabel />
      </div>
    );
  }
}

export default App;
