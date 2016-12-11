import React, { Component } from 'react';


// render an image from the destination that is searched
export default class Images extends Component {

  render() {
    return (
      <div className="image">
      <h4>Results for: {this.props.name}</h4>
        { this.props.source ? <img src={this.props.source} /> : null }
      </div>
    );
  }
}
