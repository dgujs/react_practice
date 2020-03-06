import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';



// Render : componentWillMount() -> render() -> componentDidMount()
// 위 Cycle은 자동으로 발생한다.

// Update : componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> 

class App extends Component {

  state = {}

  componentDidMount() {
    this._getMoives()
  }

  _getMoives = async () => {
    const movies = await this._callApi();
    this.setState({
      movies
    })
  }

  _callApi = () => {
    return fetch('https://yts.mx/api/v2/list_movies.json?sort_by=rating')
      .then(a => a.json())
      .then(json => json.data.movies)
  }
  
  _renderMovies = () => {
    const movies = this.state.movies.map(movie =>
      <Movie
      title={movie.title_english}
      poster={movie.medium_cover_image}
      key={movie.id}
      genres= {movie.genres}
      synopsis = {movie.synopsis}
      />
    )
    return movies
  }


  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;
