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
    </div>
    )
  }
}


export default Search;


        // <input
        // type="text"
        // value={this.props.name}
        // onChange={this.props.userInput}
        // />
        // <h3>{this.props.result.Title}</h3>
        // <img src={this.props.result.Poster} />
        // <button onClick={this.props.addToDb}>Add</button>
