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
        <MovieInfo />
        <MoviePoster />
      </div>
    )
  }
}

export default App;