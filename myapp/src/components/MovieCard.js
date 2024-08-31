import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <>
      <Card style={{ width: '15rem', borderRadius: '10px', margin: '10px' }}>
        <Card.Img variant="top" src={movie.posterURL} />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>
            {movie.description.length > 100 ? movie.description.substring(0, 100) + '...' : movie.description}
          </Card.Text>
          <Card.Text>Note: {movie.rating}</Card.Text>
          <Link to={`/movie/${movie.id}`}>
            <Button variant="primary">Voir plus</Button>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default MovieCard;