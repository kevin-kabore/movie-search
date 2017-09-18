import React, { Component } from 'react';
import Movie from './movie.jsx';

class movieList extends Component {
  render() {
    let movieNodes = this.props.movieData.map(movie => {
      console.log(movie);
      let posterPath = 'http://image.tmdb.org/t/p/w185/' + movie.poster_path;
      return (
        <Movie key={movie.id} posterPath={posterPath} title={movie.title} />
      );
    });
    return (
      <div className="container">
        <div className="grid">{movieNodes}</div>
      </div>
    );
  }
}

export default movieList;
