import React from 'react';
import MovieInfo from './MovieInfo.jsx';
import MoviePoster from './MoviePoster.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieId: 1,
      poster: ''
    };
  }

  // fetch movie poster on mount
  componentDidMount() {
    this.getMoviePoster(this.state.movieId);
  }
  getMoviePoster(movieId) {
    fetch('/movies/poster')
    .then(res => res.json())
    .then(
      result => {
        this.setState({
          poster: result
        });
      },
      error => {
        this.setState({
          error
        });
      }
    )
  }

  render() {
    return (
      <div>
        <img src="https://s3.us-east-2.amazonaws.com/fec-hrr37-brian/gettyimages-527874823-1024x1024.jpg"></img>
        <MovieInfo />
        <MoviePoster />
      </div>
    )
  }
}

export default App;