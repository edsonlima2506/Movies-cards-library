// implement MovieList component here
import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        <section>
          { movies.map((filme) => (<MovieCard
            key={ filme.title }
            movie={ filme }
          />))}
        </section>
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.objects).isRequired,
};

export default MovieList;
