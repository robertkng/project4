import React, { Component } from 'react';
import ItineraryList from '../ItineraryList/ItineraryList.jsx';
import './Itinerary.css';

class Itinerary extends Component {


  renderAllItineraries() {
    return this.props.title.map((mov, i) =>
    <ItineraryList
    title={mov.title}
    key={i}
    id={mov.id}
    updateItineraryTitle={this.props.updateItineraryTitle}
    deleteFromDb={this.props.deleteFromDb}
    />
    )
}

  componentWillMount(){
    this.props.getAllItineraries();
  }

    handleInputChange(e) {
    this.setState({
      msg: e.target.value,
    });
  }

render() {
    return (
    <div className="itinerary">
    <h3> Your Itinerary </h3>
        <input
        id="itinerary-title"
        type="text"
        maxLength="200"
        placeholder="Name of itinerary"
        value={this.props.input}
        onChange={this.props.userTitle}
        />
        <br />
        <textarea
        id="user-itinerary"
        type="text"
        maxLength="20000"
        placeholder="You may type out or copy and paste your itinerary. Be as specific as you can with your flight schedule, if you need a hotel, pick up / drop off time and date, places you want to visit, or if you just want to be driven around. (No more than 20,000 characters)"
        value={this.props.input}
        onChange={this.props.userInput}
        />
        <button onClick={this.props.addToDb}>SUBMIT FOR PRICE QUOTE</button>


     <h3> Saved Itineraries </h3>
        {this.renderAllItineraries()}
    </div>
        )
    };
}

export default Itinerary;


