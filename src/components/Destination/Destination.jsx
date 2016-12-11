// import React, { Component } from 'react';
// import './Destination.css';

// class Destination extends Component {

// componentWillMount(){
//     this.props.getAllDestinations();
//   }

//   render() {
//     return this.props.destinations.map((destination, i) =>
//       <div>
//       <h2>Most Popular Destinations</h2>
//         <ul>
//           <li>{destination.city}</li>
//           <li>{destination.country}</li>
//           <li>{i}</li>
//           <li>{destination.id}</li>
//         </ul>
//       </div>

//       )
//     };
// }


// export default Destination;




import React, { Component } from 'react';
import './Destination.css';

class Destination extends Component {

  componentWillMount() {
    this.props.getAllDestinations();
  }

    showDestinations(destinations) {
    // const timestamp = new Date().getUTCMilliseconds();

    return destinations.map((cities, index) => {
      console.log(cities);
      return (
        <li key={index}>{cities.city}</li>
      );
    });
  }

  render() {
    const destinations = this.props.destinations;

    return (
      <ul>
        { destinations.length ? this.showDestinations(destinations) : "No destinations" }
      </ul>
    )
  };
}

export default Destination;
