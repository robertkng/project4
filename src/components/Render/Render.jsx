import React, { Component } from 'react';
import './Render.css';

class Render extends Component {

  render() {
    return (

    <div className="nowShowing">
      <h3>{this.props.title}</h3>
      <img src={this.props.poster} />

    </div>
    )
  }
}

export default Render;


