import React, { Component } from 'react';


class FamousPersonForm extends Component {

  render() {
    return (
      
        <section>
          <h2>Add A Famous Person</h2>
          <form onSubmit={this.props.submitPerson}>
            <label htmlFor="name">Name:</label>
            <input id="name" onChange={this.props.handleChangeFor('name')} value={this.props.newPerson.name}/>
            <label htmlFor="role">Role:</label>
            <input id="role" onChange={this.props.handleChangeFor('role')} value={this.props.newPerson.role}/>
            <input type="submit" value="Add Person"/>

          </form>
          
        
        </section>
    );
  }
}

export default FamousPersonForm;