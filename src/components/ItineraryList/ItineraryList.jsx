import React, { Component } from 'react';
import './ItineraryList.css';

class ItineraryList extends Component {

  render() {
    return (

    <div className="Your itineraries">
      <h3>{this.props.title}</h3>

    </div>
    )
  }
}

export default ItineraryList;

      // <button onClick={() => this.props.deleteFromDb(this.props.id)}>Delete</button>

