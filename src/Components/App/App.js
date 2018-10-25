import React, { Component } from 'react';
import Header from '../Header/Header';
import FamousPersonForm from '../FamousPersonForm/FamousPersonForm';
import FamousPersonList from '../FamousPersonList/FamousPersonList';
import FamousPerson from '../FamousPerson/FamousPerson'
import './App.css';


class App extends Component {

  state = {
    newPerson: {
      name: '',
      role: ''

    },
    peopleList: [],
  };

    handleChangeFor = (propertyName) => (event) => {
      console.log(event.target.value);
      //Update our component state
      this.setState({
        newPerson:{
        ...this.state.newPerson,
        [propertyName]: event.target.value
      } 
    })
    
  }

    submitPerson = (event) => {
      event.preventDefault();
      
      //Update our component state
      this.setState({
        newPerson: {
          name: '',
          role: '',
      },
      peopleList: [...this.state.peopleList, this.state.newPerson],
    })
  }


  render() {
    return (
      <div className="App">
       
        <Header />
       
        <FamousPersonForm submitPerson={this.submitPerson} handleChangeFor={this.handleChangeFor} newPerson={this.state.newPerson}/>
          
        <FamousPersonList list={this.state.peopleList}/>
        <FamousPerson />
        
      </div>
    );
  }
}

export default App;