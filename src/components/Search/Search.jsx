import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
  render() {
    return (
    <div id="search">
        <input
        type="text"
        name={this.props.name}
        value={this.props.input}
        onChange={this.props.userInput}
        />
        <button onClick={this.props.search}>SEARCH CITY OR COUNTRY</button>

    </div>
    )
  }
}


export default Search;


