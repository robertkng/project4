import React, { Component } from 'react';
import './Destination.css';

class Destination extends Component {

  componentWillMount() {
    this.props.getAllDestinations();
  }

  showDestinations(destinations) {
    // const regex = /(<br \/>)/g;
    return destinations.map((render, index) => {
      return (
        <ul key={index} className="results-container">
          <li>{render.city}, </li>
          <li>{render.country}</li>
          <li>{render.activity}</li>
        </ul>
      );
    });
  }

  render() {
    const destinations = this.props.destinations;

    return (
      <div id="destinations">
      <h3>Most popular destinations & activities</h3>
        {this.showDestinations(destinations)}
      </div>
    )
  };
}

export default Destination;
