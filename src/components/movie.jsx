import React, { Component } from 'react';

class Movie extends Component {
  render() {
    return (
      <div className="movie-box">
        <figure>
          <img
            width="106px"
            className="responsive-img"
            src={this.props.posterPath}
            alt="Movie"
          />
          <figcpation>
            <h3>{this.props.title}</h3>
          </figcpation>
        </figure>
      </div>
    );
  }
}

export default Movie;
