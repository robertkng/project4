import React, { Component } from 'react';
// import Socket from './Socket/Socket.jsx';
import Search from '../Search/Search.jsx';
import './App.css';


export default class App extends Component {
    constructor() {
    super();

    this.state = {
      searchTerm: '',
      images: [],
      // totalResults: 0
      result: {}
    };
  }

  getAllImages() {
    console.log('app.jsx');
    // fetch must be made to middleware route. Client will never see this
    fetch(`/images`)
    .then(r => r.json())
    .then((data) => {
      this.setState({
        // images: data
      });
      // console.log(this.state);
    })
    .catch(err => console.log(err));
  }

    updateInput(e) {
    // let movieTitle = e.target.value;
    this.setState({
      // searchTerm: movieTitle
      searchTerm: e.target.value
    })
    console.log(this.state.searchTerm);
  }

  searchImages(searchTerm) {
    console.log('searchImages function');
  fetch(`http://www.omdbapi.com/?t=${this.state.searchTerm}`)
  .then(r => r.json())
  .then((found) => {
    this.setState({
      result: found
    });
  })
  .catch(err => console.log(err));
}

  render() {
    return (
      <div className="App">
          <h2>Quotinerary</h2>
          <Search
            name={this.state.searchTerm}
            userInput={this.updateInput.bind(this)}
            search={()=> this.searchImages()}
            result={this.state.result}
          />
        </div>
    );
  }
}


    // return (
    //   <div className="App">
    //     <Nav />
    //     <SearchHeader
    //       name={this.state.searchTerm}
    //       userInput={this.updateInput.bind(this)}
    //       search={()=> this.searchMovies()}
    //       result={this.state.result}
    //       addToDb={this.addToDb.bind(this)}
    //     />
    //     <MovieList
    //       movies={this.state.movies}
    //       getAllMovies={this.getAllMovies.bind(this)}
    //       deleteFromDb={this.deleteFromDb.bind(this)}
    //     />
    //     <Footer />
    //   </div>
    // );
