import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class MyComponent extends React.Component {
  render() {
    return <div class="">
      <h1>{this.props.text}</h1>
      <p>{this.props.par}</p>
    </div>
  }
}

class MySecondComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      txt: 1
    }
  }

  random(number) {
    this.setState({ txt: number })
  }
  render() {
    return <div>
      <h1>{this.props.text}</h1>
      <p>{this.props.par}</p>
      <p>{this.state.txt}</p>
      <button onClick={() => this.random(Math.random())}>Increment</button>
    </div>
  }
}
class MyThirdComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      ThirdCompP: "that returns a component",
      buttonLabel: "click me"
    }
  }
  render() {
    return (
      <div>
        <h1>{this.props.label}</h1>
        <p>{this.state.ThirdCompP}</p>
        <button onClick={() => this.setState({ buttonLabel: "I've tricked you!", ThirdCompP: "HaHaHa" })}>{this.state.buttonLabel}</button>
      </div>)
  }
}

class ContComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      names: [],
      label: 0
    }
  }

  listaNume(lista) {
    var result = lista.sort();
    result = lista.map(function (item) {
      return <p>{item}</p>;
    });

    return result;
  }
  render() {

    const lista = this.listaNume(this.state.names);
    return (
      <div>
        <div class="List-container">
          {lista}
        </div>
        {/*   <MyComponent text="Hello World" par="This is test subtitle" />
        <MySecondComponent text="I am a component" par="I am the above comp subtitle" />
        <MyThirdComponent label={this.state.label} /> 
   */}
        <p>Total names: {this.state.label}</p>
        <input type="text" value={this.state.value} onChange={event => { console.log(event); this.setState({ value: event.target.value }) }} />
        <p>Last Name sent: {this.state.value}</p>
        <button onClick={() => this.setState({ names: [], label:0 })}>Clear list</button>
        <button onClick={() => this.setState((state) => state.names.push(this.state.value), this.setState({ label: this.state.names.length + 1 }))}>Add to list</button>

      </div>)
  }
}
class App extends Component {
  render() {
    return (
      <div class="App-main">
        <ContComponent />
      </div>
    );
  }
}

export default App;
