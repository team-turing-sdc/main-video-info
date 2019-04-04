import React from 'react';
import styled from 'styled-components';
import {MovieInfo} from './MovieInfo.jsx';
import {MoviePoster} from './MoviePoster.jsx';
import Options from './Options.jsx';
import LocationSearch from './LocationSearch.jsx';
import LocationShowTimes from './LocationShowtimes.jsx';

// styled components below
const Container = styled.section`
  background: #262626;
  height: 75vh;
  width: 36vw;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 47.5% 5% 47.5%;
`;
const PosterWrapper = styled.div`
  grid-column: 1 / 3;
  grid-row: 1 / 2;
`;
const MovieWrapper = styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / 3;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieId: 1,
      poster: '',
      movieInfo: null,
      locationSearched: false
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
  // change state if search is activated
  changeLocationSearchStatus() {
    this.setState({
      locationSearched: true
    });
  }

  render() {
    if (this.state.movieInfo && !this.state.locationSearched) {
      return (
        <Container>

          <PosterWrapper>
            <MoviePoster poster={this.state.poster}/>
          </PosterWrapper>

          <MovieWrapper>
            <MovieInfo info={this.state.movieInfo}/>
          </MovieWrapper>

          <Options></Options>

          <LocationSearch info={this.state.movieInfo} handleSearch={this.changeLocationSearchStatus.bind(this)}></LocationSearch>

        </Container>
        )
    } else if (this.state.movieInfo && this.state.locationSearched) {
      return (
        <Container>

          <PosterWrapper>
            <MoviePoster poster={this.state.poster}/>
          </PosterWrapper>

          <MovieWrapper>
            <MovieInfo info={this.state.movieInfo}/>
          </MovieWrapper>

          <Options></Options>

          <LocationShowTimes></LocationShowTimes>

        </Container>
        )
    } else {
      return (
        <div></div>
      )
    }

  }
}

export default App;