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
        maxLength="20000"
        placeholder="You may type out or copy and paste your itinerary. Be as specific as you can with your flight schedule, if you need a hotel, pick up / drop off time and date and the places you want to visit. (No more than 20,000 characters)"
        value={this.props.name}
        onChange={this.props.userInput}
        />
        <button onClick={this.props.addToDb}>SUBMIT FOR PRICE QUOTE</button>
    </div>
    )
  }
}


export default Itinerary;


