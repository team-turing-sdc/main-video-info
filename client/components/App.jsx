import React from 'react';
import styled from 'styled-components';
import MovieInfo from './MovieInfo.jsx';
import MoviePoster from './MoviePoster.jsx';




const Container = styled.section`
  padding: 4em;
  background: red;
`;


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieId: 27,
      poster: '',
      movieInfo: null,
    };
  }

  // fetch movie poster on mount
  componentDidMount() {
    this.getMoviePoster(this.state.movieId);
    this.getMovieInfo(this.state.movieId);
  }
  // get poster image associated with selected movie
  getMoviePoster(id) {
    fetch(`movies/poster?movieID=${id}`)
      .then(res => res.json())
      .then(
        result => {
        this.setState({
          poster: result,
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
      <Container>
        <MovieInfo info={this.state.movieInfo}/>
        <MoviePoster poster={this.state.poster}/>
      </Container>
      )
  }
}

export default App;