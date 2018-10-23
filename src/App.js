import React, { Component } from 'react';

import './App.css';

class App extends Component {

  state = {
    famousPerson: {
      name: '',
      role: ''

    }
  };

  handleNameChange = (event) => {
    console.log(event.target.value);
    //Update our component state
    this.setState({famousPerson:{
      ...this.state.famousPerson,
      name: event.target.value} });
    
  }

  handleRoleChange = (event) => {
    console.log(event.target.value);
    //Update our component state
    this.setState({famousPerson: {
      ...this.state.famousPerson,
      role: event.target.value} });
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>Famous People</h1>
        </header>
          <div>
          <input onChange={this.handleNameChange} placeholder="name"/>
          <input onChange={this.handleRoleChange} placeholder="role"/>
          <p>
            {this.state.famousPerson.name} is a Famous Person; known for their Role as a {this.state.famousPerson.role}
          </p>

          </div>
          
        
      </div>
    );
  }
}

export default App;
