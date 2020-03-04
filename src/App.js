import React from 'react';
import './App.css';
import Movie from './Movie';


const moviesTitle = [
  "a",
  "b",
  "c",
  "d",
];

const movieImages = [
  "temp",
  "temp",
  "temp",
  "temp",
];

const App = () => {
  return (
    <div className="App">
      <Movie title={moviesTitle[0]} poster= {movieImages[0]}/>
      <Movie title={moviesTitle[1]} poster= {movieImages[1]}/>
      <Movie title={moviesTitle[2]} poster= {movieImages[2]}/>
      <Movie title={moviesTitle[3]} poster= {movieImages[3]}/>
    </div>
  );
}

export default App;
