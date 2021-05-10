import { Component } from "react";
import api from "../utils/apiService";

import Container from "../components/Container";
import MoviesList from "../components/MoviesList";
import SearchForm from "../components/SearchForm";

class MoviesPage extends Component {
  state = {
    query: "",
    movies: [],
    error: "",
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.query;
    const { query } = this.state;

    if (prevQuery.toLowerCase() !== query.toLowerCase()) {
      api
        .fetchSearchMovies(query)
        .then((movies) => {
          if (movies.length === 0) throw new Error("no movies found");
          this.setState({ movies, error: "" });
        })
        .catch((error) => {
          this.setState({
            movies: [],
            error: error?.response?.data?.errors[0] ?? error.message,
          });
        });
    }
  }

  onSearchSubmit = (query) => {
    this.setState({ query });
  };

  render() {
    const { movies, error } = this.state;
    return (
      <Container>
        <SearchForm onSubmit={this.onSearchSubmit} />
        {movies.length > 0 && <MoviesList movies={movies} />}
        {error && <p>{error}</p>}
      </Container>
    );
  }
}

export default MoviesPage;
