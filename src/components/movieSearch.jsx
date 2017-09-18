import React, { Component } from 'react';

class movieSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: ''
    };
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }
  handleSearchSubmit(e) {
    e.preventDefault();
    this.props.onMovieSearch(this.state.searchString);
  }
  handleSearchChange(e) {
    e.preventDefault();
    this.setState({ searchString: e.target.value });
  }
  render() {
    return (
      <div>
        <form ref="form" onSubmit={this.handleSearchSubmit}>
          <input
            type="text"
            value={this.state.searchString}
            onChange={this.handleSearchChange}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default movieSearch;
