import React from 'react';
import './Movie.css';


const Movie = ({ title, poster }) => {
    return (
        <div>
            <MoviePoster poster={poster} />
            <h1>{title}</h1>
        </div>
    )
}

const MoviePoster = ({ poster }) => {
    return (
        <img src={poster} />
    )
}
export default Movie