import React, { Component } from 'react';
// import Socket from './Socket/Socket.jsx';
import Search from '../Search/Search.jsx';
import './App.css';

    // const CLIENT_ID = process.env.CLIENT_ID;
    // const CLIENT_SECRET = process.env.CLIENT_SECRET;
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
        images: data
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
    const CLIENT_ID = process.env.CLIENT_ID;
    const CLIENT_SECRET = process.env.CLIENT_SECRET;
    console.log(CLIENT_ID, CLIENT_SECRET);
  // fetch(`https://api.shutterstock.com/v2/images/search?per_page=4&query=${this.state.searchTerm}`)
  fetch(`https://${CLIENT_ID}:${CLIENT_SECRET}@api.shutterstock.com/v2/images/search?query=${this.state.searchTerm}`)
  .then(r => r.json())
  .then((found) => {
    this.setState({
      result: found
    });
    console.log('searchImages function');
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
