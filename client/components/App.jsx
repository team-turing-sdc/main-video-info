import React from 'react';
import MovieInfo from './MovieInfo.jsx';
import MoviePoster from './MoviePoster.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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