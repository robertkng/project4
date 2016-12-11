import React, { Component } from 'react';
import './Itinerary.css';

class Itinerary extends Component {
  render() {
    return (
    <div id="itinerary">
    Itinerary
        <input
        type="text"
        value={this.props.name}
        onChange={this.props.userInput}
        />


    </div>
    )
  }
}


export default Itinerary;


