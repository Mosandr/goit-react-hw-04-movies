import { Component } from "react";
import { Link, Route } from "react-router-dom";
import api from "../utils/apiService";

import Container from "../components/Container";
import MovieCard from "../components/MovieCard";
import Cast from "../components/Cast";
import Reviews from "../components/Reviews";

class MovieDetailsPage extends Component {
  state = { movie: {} };

  componentDidMount() {
    const { match } = this.props;
    const movieId = match.params.movieId;

    api
      .fetchMoviesById(movieId)
      .then((movie) => {
        if (!movie) throw new Error("Opps movie not found");
        this.setState({ movie: movie });
      })
      .catch((error) => console.log(error));
  }

  render() {
    const { movie } = this.state;
    const { match } = this.props;
    const { url, path } = match;

    return (
      <Container>
        <MovieCard movie={movie} />
        <p>Additional information</p>
        <ul>
          <li>
            <Link to={`${url}/cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`${url}/reviews`}>Reviews</Link>
          </li>
        </ul>
        <Route path={`${path}/cast`} component={Cast} />
        <Route path={`${path}/reviews`} component={Reviews} />
      </Container>
    );
  }
}

export default MovieDetailsPage;
