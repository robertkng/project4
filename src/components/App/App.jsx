// import React, { Component } from 'react';
// // import Socket from './Socket/Socket.jsx';
// import Search from '../Search/Search.jsx';
// import Destination from '../Destination/Destination.jsx';
// import Image from '../Image/Image.jsx';
// import './App.css';

//     // const CLIENT_ID = process.env.CLIENT_ID;
//     // const CLIENT_SECRET = process.env.CLIENT_SECRET;
// export default class App extends Component {
//     constructor() {
//     super();

//     this.state = {
//       searchTerm: '',
//       destinations: [],
//       // totalResults: 0
//       result: {}
//     };
//   }

//   getAllDestinations() {
//     console.log('app.jsx');
//     // fetch must be made to middleware route. Client will never see this
//     fetch(`/api/destinations`)
//     .then(r => r.json())
//     .then((results) => {
//       this.setState({
//         destinations: results.data
//       });
//       // console.log(this.state);
//     })
//     .catch(err => console.log(err));
//   }

//     updateInput(e) {
//     // let movieTitle = e.target.value;
//     this.setState({
//       // searchTerm: movieTitle
//       searchTerm: e.target.value
//     })
//     console.log(this.state.searchTerm);
//   }

// searchImages(searchTerm) {
//     // Set variable for API credentials
//     const CLIENT_ID = process.env.CLIENT_ID;
//     const CLIENT_SECRET = process.env.CLIENT_SECRET;

// // function authorization() {
// //   return 'Basic '
// // }
//     // send creditials with url, must include 'Basic'
//     // window.btoa encodes API credentials just like .env.
//     // source: https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/btoa
//     const authorization = () => 'Basic ' + (window.btoa(`${CLIENT_ID}:${CLIENT_SECRET}`));
//     // console.log(CLIENT_ID, CLIENT_SECRET, authorization());

//     // Shutterstock API requires headers authorization to fetch data from the API
//     const authParameters = {
//       headers: {
//         Authorization: authorization()
//       }
//     };

//     const SHUTTERSTOCK_API_ENDPOINT = `https://api.shutterstock.com/v2/images/search?per_page=1&query=${this.state.searchTerm}`;

//     fetch(SHUTTERSTOCK_API_ENDPOINT, authParameters)
//     .then(r => r.json())
//     .then(result => {
//       // console.log(typeof result);
//       console.log(result.data[0].assets.preview.url);
//       console.log(result.data[0].assets);
//       this.setState({
//         image: result.data[0].assets.preview.url,
//       });
//     });
//   }

//   render() {
//     return (
//       <div className="App">
//           <h2>Quotinerary</h2>
//           <Search
//             name={this.state.searchTerm}
//             userInput={this.updateInput.bind(this)}
//             search={()=> this.searchImages()}
//             result={this.state.result}
//           />
//           <Image
//             source={this.state.image}
//           />
//           <Destination
//             destinations={this.state.destinations}
//             getAllDestinations={this.getAllDestinations.bind(this)}
//           />
//         </div>
//     );
//   }
// }

import React, { Component } from 'react';
// import Socket from './Socket/Socket.jsx';
import Search from '../Search/Search.jsx';
import Image from '../Image/Image.jsx';
import Destination from '../Destination/Destination.jsx';
import './App.css';

    // const CLIENT_ID = process.env.CLIENT_ID;
    // const CLIENT_SECRET = process.env.CLIENT_SECRET;
export default class App extends Component {
    constructor() {
    super();

    this.state = {
      searchTerm: '',
      destinations: [],
      // totalResults: 0
      result: {}
    };
  }

  getAllDestinations() {
    console.log('app.jsx');
    // fetch must be made to middleware route. Client will never see this
    fetch(`/api/destinations`)
    .then(r => r.json())
    .then((results) => {
      this.setState({
        destinations: results.data
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
    // Set variable for API credentials
    const CLIENT_ID = process.env.CLIENT_ID;
    const CLIENT_SECRET = process.env.CLIENT_SECRET;

    // window.btoa encodes API credentials just like .env.
    // source: https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/btoa
    // In the context of a HTTP transaction, basic access authentication is a method for a HTTP user agent to provide a user name and password when making a request.
    const authorization = () => 'Basic '.concat(window.btoa(`${CLIENT_ID}:${CLIENT_SECRET}`));
    // console.log(CLIENT_ID, CLIENT_SECRET, authorization());

    // Shutterstock API requires headers authorization to fetch data from the API
    const authParameters = {
      headers: {
        Authorization: authorization()
      }
    };

    const SHUTTERSTOCK_API_ENDPOINT = `https://api.shutterstock.com/v2/images/search?per_page=1&query=${this.state.searchTerm}`;

    fetch(SHUTTERSTOCK_API_ENDPOINT, authParameters)
    .then(r => r.json())
    .then(result => {
      // console.log(typeof result);
      console.log(result.data[0].assets.preview.url);
      console.log(result.data[0].assets);
      this.setState({
        image: result.data[0].assets.preview.url,
      });
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
          source={this.state.image}
        />

        <Destination
          destinations={this.state.destinations}
          getAllDestinations={this.getAllDestinations.bind(this)}
        />
      </div>
    );
  }
}
