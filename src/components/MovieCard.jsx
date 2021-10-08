// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="movieCard">
        <img src={ movie.imagePath } alt={ movie.title } className="movieImage"/>
        <h4 className="movieName">{ movie.title }</h4>
        <h5 className="movieSubtitle">{ movie.subtitle }</h5>
        <p className="movieStoryline">{ movie.storyline }</p>
        <Rating rating={ movie.rating } />
      </div>
    );
  }
}

MovieCard.propTypes = {

  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    imagePath: PropTypes.string.isRequired,
  }).isRequired,

};

export default MovieCard;
