import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class ContComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      names: [],
      label: 0,
      highlight: "",
      teststate: ""
    }
  }

  listaNume(lista) {
    var highlight = this.state.highlight;
    var result = lista.sort();
  

    let removeFromAry = (i) => {
      console.log(i + 1);
      var filteredAry = lista.filter(e => e !== this.state.names[i])

      this.setState({ names: filteredAry, label:this.state.label-1})
    };
  
    result = lista.map(function (item) {
      if (item === highlight) {
        return (
          <div>
            <p className="blue">
              <b>{item}</b>
              <button onClick={() => removeFromAry(lista.indexOf(item)) + 1}>remove</button>
            </p>
          </div>);
      }
      else
        return <div><p>{item}<button onClick={() => removeFromAry(lista.indexOf(item)) + 1}>remove</button></p></div>;
    });

    return result;
  }
  render() {

    const lista = this.listaNume(this.state.names);
    return (
      <div>
        <h1>Just a list of names... sorted... and more :)</h1>
        <div className="List-container">
          {lista}
        </div>
        
        <p>Total names: {this.state.label}</p>
        <input type="text" value={this.state.value} onChange={event => { this.setState({ value: event.target.value }) }} />
        <p>Last Name sent: {this.state.value}</p>
        <button onClick={() => this.setState({ names: [], label: 0 })}>Clear list</button>
        <button onClick={() => this.setState((state) => state.names.push(this.state.value), this.setState({ label: this.state.names.length + 1, highlight: this.state.value }))}>Add to list</button>
<p className="copyright">just a copyright note</p>
      </div>)
  }
}
class App extends Component {
  render() {
    return (
      <div className="App-main">
        <ContComponent />
      </div>
    );
  }
}

export default App;
