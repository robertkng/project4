import React, { Component } from 'react';


// render an image from the destination that is searched
export default class Images extends Component {

  render() {
    return (
      <div id="image">
      <h3>Results: {this.props.name}</h3>
        { this.props.source ? <img src={this.props.source} /> : null }
      </div>
    );
  }
}
