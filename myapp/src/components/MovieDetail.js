import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const MovieDetail = ({ movies }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies.find((movie) => movie.id === parseInt(id));

  if (!movie) {
    return <div className='notFound'>Film non trouvé</div>;
  }

  return (
    <div className='detailContainer'>
      <Button className='backButton' variant="secondary" onClick={() => navigate('/')}>
        <span class="material-symbols-outlined">
          arrow_back
        </span>
      </Button>
      <h1>Detail du Film</h1>
      <div className='detailInfo'>
        <div className='detailLeft'>
          <img src={movie.posterURL} alt={movie.title} />
          <p>Note: {movie.rating}</p>
        </div>
        <div className='detailRight'>
          <h3>{movie.title}</h3>
          <p>{movie.description}</p>
          <div className='trailer'>
            <iframe 
              width="560" 
              height="315" 
              src={movie.trailerURL} 
              title="YouTube video player" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerpolicy="strict-origin-when-cross-origin" 
              allowfullscreen>
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;