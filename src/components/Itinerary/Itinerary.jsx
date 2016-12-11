import React, { Component } from 'react';
import './Itinerary.css';

class Itinerary extends Component {
  render() {
    return (
    <div className="itinerary">
    <h3> Itinerary </h3>
        <textarea
        id="user-itinerary"
        type="text"
        maxlength="20000"
        placeholder="Type out your itinerary. You may copy and paste."
        value={this.props.name}
        onChange={this.props.userInput}
        />
        <button onClick={this.props.search}>SUBMIT FOR PRICE QUOTE</button>

    </div>
    )
  }
}


export default Itinerary;


