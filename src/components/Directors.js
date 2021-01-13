import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
    <h1>Directors Page</h1>
    <div>{directors.map((director, index) => {
      <div key={index} >
        <h3>Name: {director.name}</h3>
        <p>Genres</p>
         <ul>{director.movies.map(movie, index) => {
           <li key={index}>{movie}</li>
         }}</ul>

    })}</div>
    </div>
  );
}

export default Directors
