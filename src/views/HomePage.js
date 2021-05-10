import { Component } from "react";
import api from "../utils/apiService";

import Container from "../components/Container";
import MoviesList from "../components/MoviesList";

class HomePage extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    api
      .fetchTrandingMovies()
      .then((movies) => {
        this.setState({ movies });
      })
      .catch(console.log);
  }

  render() {
    const { movies } = this.state;

    return (
      <Container>
        <h1>Tranding today</h1>
        <MoviesList movies={movies} />
      </Container>
    );
  }
}

export default HomePage;
