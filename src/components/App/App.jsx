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

//   searchImages(searchTerm) {
//     const CLIENT_ID = process.env.CLIENT_ID;
//     const CLIENT_SECRET = process.env.CLIENT_SECRET;
//     console.log(CLIENT_ID, CLIENT_SECRET);
//   // fetch(`https://api.shutterstock.com/v2/images/search?per_page=4&query=${this.state.searchTerm}`)
//   fetch(`https://${CLIENT_ID}:${CLIENT_SECRET}@api.shutterstock.com/v2/images/search?query=${this.state.searchTerm}`)
//   .then(r => r.json())
//   .then((found) => {
//     this.setState({
//       result: found
//     });
//     console.log('searchImages function');
//   })
//   .catch(err => console.log(err));
// }

searchImages(searchTerm) {
    const CLIENT_ID = process.env.CLIENT_ID;
    const CLIENT_SECRET = process.env.CLIENT_SECRET;

    // Basic Authentication for accessing Shutterstock API
    // window.btoa encodes API credentials just like .env.
    // source: https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/btoa
    const basicAuth = () => 'Basic '.concat(window.btoa(`${CLIENT_ID}:${CLIENT_SECRET}`));
    console.log(CLIENT_ID, CLIENT_SECRET, basicAuth());

    // API looks for headers before providing authorization to access data from the API
    const authParameters = {
      headers: {
        Authorization: basicAuth()
      }
    };

    const SHUTTERSTOCK_API_ENDPOINT = `https://api.shutterstock.com/v2/images/search?query=${this.state.searchTerm}`;

    fetch(SHUTTERSTOCK_API_ENDPOINT, authParameters)
    .then(response => {
      return response.json();
    })
    .then(json => {
      console.log(json);
    });
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
          <Image
            images={this.state.images}
            getAllImages={this.getAllImages.bind(this)}
          />
        </div>
    );
  }
}




    // return (
    //   <div className="App">
    //     <Nav />
    //     <MovieList
    //       movies={this.state.movies}
    //       getAllMovies={this.getAllMovies.bind(this)}
    //       deleteFromDb={this.deleteFromDb.bind(this)}
    //     />
    //     <Footer />
    //   </div>
    // );
