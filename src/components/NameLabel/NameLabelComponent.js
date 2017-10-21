import React, { Component } from 'react';
import RemoveButton from '../../components/RemoveButton';
import '../../App.css';
import api from './api';

class NameLabel extends Component {
  constructor() {
    super();
    this.state = {
      names: []
    }
  }

  componentWillMount() {
    this.loadUsersFromApi();
  }

  createNameTags(namesList) {
    namesList.sort((a, b) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0); //sort 

    let removeFromAry = (i) => {
      let filteredAry = namesList;
      let index = filteredAry.findIndex(x => x.name === i);
      console.log('index of ' + i + ' is:' + index);
      filteredAry.splice(index, 1);
      this.setState({
        names: filteredAry
      })
    }

    return (
    namesList.map((item, i) => {
      return (
        <RemoveButton key={ i } item={ item.name } actionFct={ removeFromAry } className={ (item.isLast === true) ? "blue" : "" } />
        );
    }))
  }

  loadUsersFromApi = () => {
    api.getUsers().then((res) => {
      //TODO Creaza o list de nume 
      
      this.setState({
        names: res
      })
    });
  }

  addName = () => {
    this.setState(prevState => {
      let {names} = prevState;
      names.forEach(name => name.isLast = false);
      names.push({
        name: this.state.value,
        isLast: true
      });

      return {
        names: names
      };
    })
  };

  onNameInputChange = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  clearNames = () => this.setState({
    names: []
  })

  render() {
    const namesListTags = this.createNameTags(this.state.names);

    return (
      <div>
        <h1>Just a list of names... sorted... and more :)</h1>
        <div className="List-container">
          { namesListTags }
        </div>
        <p>Total names:
          { this.state.names.length }
        </p>
        <p>Last Name sent:
          { this.state.value }
        </p>
        <input type="text" value={ this.state.value } onChange={ this.onNameInputChange } />
        <div className="buttons-container">
          <button onClick={ () => this.loadUsersFromApi() }>LoadFromApi</button>
          <button onClick={ this.addName }>Add Names</button>
          <button onClick={ this.clearNames }>ClearList</button>
        </div>
        <p className="copyright">JSON: <a href="https://api.myjson.com/bins/18gptr" target="_blank" rel="noopener noreferrer">
              https://api.myjson.com/bins/18gptr</a></p>
      </div>)
  }
}

export default NameLabel;