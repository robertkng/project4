import React, { Component } from 'react';
import './Destination.css';

class Destination extends Component {

componentWillMount(){
    this.props.getAllDestinations();
  }

  render() {
    return this.props.destinations.map((destination, i) =>
      <div>
      <h2>Most Popular Destinations</h2>
        <ul>
          <li>{destination.city}</li>
          <li>{destination.country}</li>
          <li>{i}</li>
          <li>{destination.id}</li>
        </ul>
      </div>

      )
    };
}


export default Destination;
