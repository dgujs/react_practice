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

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) =>
      <Movie title={movie.title} poster={movie.large_cover_image} key={index} />
    )
    return movies
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
  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;
