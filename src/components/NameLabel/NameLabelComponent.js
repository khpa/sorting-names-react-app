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
      // console.log('index of ' + i + ' is:' + index);

      filteredAry.splice(index, 1);
      console.log('to delete from api:',i);
      api.deleteUsers(i); //delete from api
      this.setState({
        names: filteredAry
      })
    }

    return (
      namesList.map((item, i) => {
        return (
          <RemoveButton key={i} item={item.name} actionFct={removeFromAry} className={(item.isLast === true) ? "blue" : ""} />
        );
      }))
  }

  loadUsersFromApi = () => {
    api.getUsers().then((res) => {

      let apiNames = res.map((n, i) => {
        return { id: i, name: n.name, username: n.username }
      });

      this.setState({
        names: apiNames
      })
    });
  }

  sendUsersToApi = (namex) => {
    api.sendUsers(namex).then((response) => {
      //let respId = response;
      //respons from api with id:11

      let returnedObj = { name: response.firstParam, respID: response.id }
      console.log('returnedOBJ',returnedObj)

      this.setState(prevState => {
        let { names } = prevState;
        names.forEach(name => name.isLast = false);

        names.push({
          name: this.state.value,
          isLast: true,
          apiID: returnedObj.respID

        });

        console.log('main array',names);   

        return {
          names: names
        };
      })
    });
  }

  addName = () => {
    this.sendUsersToApi(this.state.value); //pass name to api
    // setState() from line 60 was here  
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
        <h1>NameLabels</h1>
        {/* <h2>Just a list of names... sorted... and more :)</h2> */}
        <div className="List-container">
          {namesListTags}
        </div>
        
        {/* <p>Last Name sent:
          {this.state.value}
        </p> */}
        {/*TODO input as component */} 
        <div className="input-field">
        <p>Total names:
          {this.state.names.length}
        </p>  
        <p>Add a new name:</p>
        <input type="text" value={this.state.value} onChange={this.onNameInputChange} />
        </div>
        <div className="buttons-container">
          <button onClick={() => this.loadUsersFromApi()}>LoadFromApi</button>
          <button onClick={this.addName}>Add Names</button>
          <button onClick={this.clearNames}>ClearList</button>
        </div>
        <p className="copyright">JSON: <a href="https://jsonplaceholder.typicode.com/users" target="_blank" rel="noopener noreferrer">
        https://jsonplaceholder.typicode.com/users</a></p>
      </div>)
  }
}

export default NameLabel;