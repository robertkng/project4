import React, { Component } from 'react';
import './Itinerary.css';

class Itinerary extends Component {
  render() {
    return (
    <div id="itinerary">
    Itinerary
        <input
        id="user-itinerary"
        type="text"
        placeholder="Enter Itinerary. You may copy and paste."
        value={this.props.name}
        onChange={this.props.userInput}
        />


    </div>
    )
  }
}


export default Itinerary;


