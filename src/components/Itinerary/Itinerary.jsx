import React from 'react';
import './Itinerary.css';


const Itinerary = props => (
    <div className="itinerary">
    <h3> Your Itinerary </h3>
        <textarea
        id="user-itinerary"
        type="text"
        maxLength="20000"
        placeholder="You may type out or copy and paste your itinerary. Be as specific as you can with your flight schedule, if you need a hotel, pick up / drop off time and date, places you want to visit, or if you just want to be driven around. (No more than 20,000 characters)"
        value={props.input}
        onChange={props.userInput}
        />
        <button onClick={props.addToDb}>SUBMIT FOR PRICE QUOTE</button>

    </div>
    );

export default Itinerary;


