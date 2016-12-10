import React, { Component } from 'react';
// import MovieListItem from '../MovieListItem/MovieListItem';
import './Image.css';

class Image extends Component {

  renderAllImages() {
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
    this.props.getAllImages();
  }



  render() {
    return(
      <div>
      <h2>Most Popular Destinations</h2>

      {this.renderAllImages()}

      </div>

      )
    };
}


export default Image;
