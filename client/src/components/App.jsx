import React from 'react';
import styled from 'styled-components';
import {MovieInfo} from './MovieInfo.jsx';
import {MoviePoster} from './MoviePoster.jsx';
import Options from './Options.jsx';
import LocationSearch from './LocationSearch.jsx';
import LocationShowTimes from './LocationShowtimes.jsx';
import API_KEY from '../../key';
// test
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
      locationSearched: false,
      showtimeInfo: []
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
    this.getLocation();
  }
  // grab location of user
  getLocation() {
    console.log('getting location');
    let correctThis = this;
    let latitude;
    let longitude;
    navigator.geolocation.getCurrentPosition(
      function(position) {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
        correctThis.getShowtimeData(latitude, longitude);
      },
      function() {
        console.log('error');
      }
    )

  }
  // get showtime info based on user location
  getShowtimeData(lat, long) {
    // hardcode id for now, maybe change later
    let filmID = 197404;
    // get current date in proper format for API
    let date = new Date();
    let month = date.getUTCMonth() + 1;
    month < 10 ? month = `0${month}` : null;
    let day = date.getUTCDate();
    day < 10 ? day = `0${day}` : null;
    let year = date.getUTCFullYear();
    console.log(`${year}-${month}-${day}`);
    // get date and time in proper format for headers
    let dateAndTime = date.toISOString();
    console.log(dateAndTime);
    console.log(lat, long)
    fetch(`https://api-gate2.movieglu.com/filmShowTimes/?film_id=${filmID}&date=${year}-${month}-${day}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'client': 'PERS_25',
            'x-api-key': `${API_KEY}`,
            'authorization': 'Basic UEVSU18yNTpQQVlobHhhT0RjcE4=',
            'api-version': 'v200',
            'territory': 'US',
            'device-datetime': `${dateAndTime}`,
            'geolocation': `${lat};${long}`
          }
        })
          .then(res => res.json())
          .then(
            result => {
              console.log(result);
              this.setState({
                showtimeInfo: result
              })
            },
            error => {
              this.setState({
                showtimeInfo: error
              });
            }
          )
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