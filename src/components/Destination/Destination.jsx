import React, { Component } from 'react';
// import MovieListItem from '../MovieListItem/MovieListItem';
import './Destination.css';

class Image extends Component {

  renderAllDestinations() {
    return this.props.images.map((mov, i) =>
      <Render
        // title={mov.title}
        // poster={mov.poster}
        key={i}
        id={mov.id}
      />
      )
  }

  componentWillMount(){
    this.props.getAllDestinations();
  }

  render() {
    return(
      <div>
      <h2>Most Popular Destinations</h2>

      {this.renderAllDestinations()}

      </div>

      )
    };
}


export default Destination;
