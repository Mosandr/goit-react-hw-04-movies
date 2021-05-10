import { Component } from "react";
import api from "../utils/apiService";
import QueryString from "query-string";

import Container from "../components/Container";
import MoviesList from "../components/MoviesList";
import SearchForm from "../components/SearchForm";

class MoviesPage extends Component {
  state = {
    query: "",
    movies: [],
    error: "",
  };

  componentDidMount() {
    const { location } = this.props;
    const query = QueryString.parse(location.search).query;
    query && this.setState({ query });
  }

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
    this.props.history.push({ search: `query=${query}` });
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
