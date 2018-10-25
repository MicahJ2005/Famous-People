import React, { Component } from 'react';


class FamousPersonList extends Component {



  render() {
    return (
      
        <section>
          <h2>All Famous People:</h2>

          <ul>
            {this.props.list.map( (famousPerson, index) => 
            <li key={index}> {famousPerson.name} is known for his/her role as a {famousPerson.role}.</li>)}
          </ul>

        </section>
          
        
      
    )
  }
}

export default FamousPersonList;