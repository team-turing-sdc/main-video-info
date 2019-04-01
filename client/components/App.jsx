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
  getMoviePoster(id) {
    fetch('/movies/poster')
    .then(res => res.json())
    .then(
      result => {
        // grab correct poster
        let image;
        result.forEach(poster => {
          if (poster.id === this.state.movieId) {
            image = poster.info.image;
          }
        })
        this.setState({
          poster: image
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
        <MovieInfo />
        <MoviePoster poster={this.state.poster}/>
      </div>
    )
  }
}

export default App;