import React, { Component } from 'react';

export default class Images extends Component {

  render() {
    return (
      <div className="image">
        { this.props.source ? <img src={this.props.source} /> : null }
      </div>
    );
  }
}
