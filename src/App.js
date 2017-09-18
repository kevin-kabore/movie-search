import React, { Component } from 'react';
import MovieSearch from './components/movieSearch';
import MovieList from './components/movieList';

import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieData: []
    };
    this.handleMovieSearch = this.handleMovieSearch.bind(this);
  }
  handleMovieSearch(movie) {
    let url =
      'http://api.themoviedb.org/3/search/movie?api_key=51a0abce642402e7b8d43b2081302e77&query=' +
      movie;
    axios.get(url).then(res => {
      let results = res.data.results;
      this.setState({ movieData: results });
    });
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>The Movie Depot</h2>
          <MovieSearch onMovieSearch={this.handleMovieSearch} />
          <MovieList movieData={this.state.movieData} />
        </div>
      </div>
    );
  }
}

export default App;
