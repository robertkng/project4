import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
  render() {
    return (
    <div>
        <input
        type="text"
        value={this.props.name}
        onChange={this.props.userInput}
        />
        <button onClick={this.props.search}>SEARCH CITY OR COUNTRY</button>
        <h3>Results for: {this.props.name}</h3>

    </div>
    )
  }
}


export default Search;

        // <img src={this.props.result.data[0].assets.preview.url} />

