import React, { Component } from 'react';
import './App.css';
import NameLabel from './components/NameLabel/NameLabelComponent';

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
