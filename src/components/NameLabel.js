import React, { Component } from 'react';
import RemoveButton from '../components/RemoveButton';
import '../App.css';
import api from '../api/api';

class NameLabel extends React.Component {
  constructor() {
    super();
    this.state = {
      rovers: [],
      names: [
      ],
      label: 0,
      highlight: "",
      teststate: ""
    }
  }

  listaNume(lista) {

    lista.sort(function compare(a, b) { return a.name < b.name ? -1 : a.name > b.name ? 1 : 0; }); //sort 

    let removeFromAry = (i) => {
      let filteredAry = lista;
      let index = filteredAry.findIndex(x => x.name === i);
      console.log('index of ' + i + ' is:' + index);
      filteredAry.splice(index, 1);
      this.setState({
        names: filteredAry,
        label: this.state.names.length
      })
    }

    console.log(lista);

    lista.sort(function (a, b) { return (a.nume > b.nume) ? 1 : ((b.nume > a.nume) ? -1 : 0); });

    return (
      lista.map((item) => {
        return (
          <RemoveButton item={item.name} actionFct={removeFromAry} className={(item.name === this.state.highlight && item.isLast === true) ? "blue" : ""} />
        );
      }))
  }

  componentWillMount() {
    api.getUsers().then((res) => {
      this.setState({
        names: res,
        label: res.length
      })
    });
  }

  foo = () => {
    var newArray = this.state.names.map(function reset(value, index) {
      return {
        name: value.name,
        isLast: false
      };
    }
    )

    this.state.names = newArray;
    this.state.names.push({ name: this.state.value, isLast: true }),
      this.setState({
        label: this.state.names.length,
        highlight: this.state.value
      })
  };

  render() {
    const lista = this.listaNume(this.state.names);
    return (
      <div>
        <h1>Just a list of names... sorted... and more :)</h1>
        <div className="List-container">
          {lista}
        </div>
        <p>Total names:
          {this.state.label}
        </p>
        
        <p>Last Name sent:
          {this.state.value}
        </p>
        <input type="text" value={this.state.value} onChange={event => {
          this.setState({
            value: event.target.value
          })
        }} />
        <div className="buttons-container">
        <button onClick={() => this.componentWillMount()}>LoadFromApi</button>

        <button onClick={this.foo}>AddNamesV2</button>
        <button onClick={() => this.setState({
          names: [],
          label: 0,
          rovers: []
        })}>ClearList</button>

        <button onClick={() => this.setState((state) =>
          state.names.push({ name: this.state.value, isLast: true }),
          this.setState({
            label: this.state.names.length + 1,
            highlight: this.state.value
          })
        )
        }>Add to list</button>
        </div> 
        <p className="copyright">JSON: <a href="https://api.myjson.com/bins/18gptr" target="_blank">https://api.myjson.com/bins/18gptr</a></p>
      </div>)
  }
}

export default NameLabel;