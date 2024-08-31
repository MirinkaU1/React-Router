import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './components/MovieList';
import NavigationBar from './components/Navbar';
import Movies from './components/Movies';
import MovieDetail from './components/MovieDetail';
import './App.css';

const App = () => {
  const [filteredMovies, setFilteredMovies] = useState(Movies);

  const handleFilter = (title, rating) => {
    const filtered = Movies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(title.toLowerCase()) &&
        movie.rating >= rating
    );
    setFilteredMovies(filtered);
  };

  return (
    <Router>
      <NavigationBar onFilter={handleFilter} />
      <Routes>
        <Route path="/" element={<MovieList movies={filteredMovies} />} />
        <Route path="/movie/:id" element={<MovieDetail movies={Movies} />} />
      </Routes>
    </Router>
  );
};

export default App;