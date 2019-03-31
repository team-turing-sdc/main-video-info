import React from 'react';
import MovieInfo from './MovieInfo.jsx';
import MoviePoster from './MoviePoster.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieId: 1,
      poster: '',
      movieInfo: null,
    };
  }

  // fetch movie poster on mount
  componentDidMount() {
    this.getMoviePoster();
    this.getMovieInfo(this.state.movieId);
  }
  // get poster image associated with selected movie
  getMoviePoster() {
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
          poster: image,
        });
      },
      error => {
        this.setState({error});
      }
    )
  }

  // get correct movie info
  getMovieInfo(id) {
    fetch(`/movies?movieID=${id}`)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            movieInfo: result,
          });
        },
        error => {
          this.setState({error});
        }
      )
  }

  render() {
    return (
      <div>
        <MovieInfo info={this.state.movieInfo}/>
        <MoviePoster poster={this.state.poster}/>
      </div>
      )
  }
}

export default App;