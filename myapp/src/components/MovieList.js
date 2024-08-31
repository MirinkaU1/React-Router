import React, { useState } from 'react';
import MovieCard from './MovieCard';
import AddMovie from './AddMovie';
import Movies from './Movies';

const MovieList = () => {
  const [movies, setMovies] = useState(Movies);

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  return (
    <div>
      <h1>Mes Films Préférés</h1>
      <AddMovie onAddMovie={handleAddMovie} />
      <div className="d-flex flex-wrap justify-content-around">
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;