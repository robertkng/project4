import React, { Component } from 'react';


// render a video from what is searched
export default class Images extends Component {

  render() {
    return (
      <div className="image">
      <h3>Results: {this.props.name}</h3>
       { this.props.source ?
          <video autoPlay loop>
            <source src={this.props.source} />
          </video>
           : null }

      </div>
    );
  }
}


        // { this.props.source ? <img src={this.props.source} /> : null }
