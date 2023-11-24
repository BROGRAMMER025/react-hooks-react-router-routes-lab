import React from 'react';
import data from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {data.actors.map(actor => (
        <div key={actor.id}>
          <h2>{actor.name}</h2>
          <ul>
            {actor.movies.map(movie => (
              <li key={movie}>{movie}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Actors;
