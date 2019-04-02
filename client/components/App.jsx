import React from 'react';
import styled from 'styled-components';
import MovieInfo from './MovieInfo.jsx';
import MoviePoster from './MoviePoster.jsx';

// styled components below
const Container = styled.section`
  background: #262626;
  height: 80vh;
  width: 36vw;
`;
const PosterWrapper = styled.div`
  margin-top: 0;
  margin-left: 0;
`;

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
        <PosterWrapper>
          <MoviePoster poster={this.state.poster}/>
        </PosterWrapper>
        <span><MovieInfo info={this.state.movieInfo}/></span>
      </Container>
      )
  }
}

export default App;