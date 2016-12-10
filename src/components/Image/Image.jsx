import React, { Component } from 'react';
// import MovieListItem from '../MovieListItem/MovieListItem';
import './Image.css';

class Image extends Component {

  // renderAllMovies() {
  //   return this.props.movies.map((mov, i) =>
  //     <MovieListItem
  //       title={mov.title}
  //       poster={mov.poster}
  //       key={i}
  //       id={mov.id}
  //       deleteFromDb={this.props.deleteFromDb}
  //     />
  //     )
  // }


  componentWillMount(){
    this.props.getAllImages();
  }



  render() {
    return(
      <div>
      <h2>Now Showing</h2>

      {this.renderAllImages()}

      </div>

      )
    };
}


export default Image;
