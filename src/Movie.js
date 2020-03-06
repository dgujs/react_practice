import React from 'react';
import './Movie.css';


const Movie = ({ title, poster, genres, synopsis }) => {
    return (
        <div className="Movie">
            <div className="Movie__Column">
                <MoviePoster poster={poster} alt={title} />
            </div>
            <div className="Movie__Column">
                <h1>{title}</h1>
                <div className="Movie__Genres">
                    {genres.map((genre, index) =>
                        <MovieGenres genre={genre} key={index} />
                    )}
                </div>
                <p className="Movie__Synopsis">
                    {synopsis}
                </p>
            </div>
        </div>
    )
}

const MovieGenres = ({ genre }) => {
    return (
        <span className="MovieGenre">{genre}</span>
    )
}
const MoviePoster = ({ poster, alt }) => {
    return (
        <img src={poster} alt={alt} className="Movie__Poster" />
    )
}
export default Movie