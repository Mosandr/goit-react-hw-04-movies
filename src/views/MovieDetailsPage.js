import { Component } from "react";
import { Link, Route } from "react-router-dom";
import api from "../utils/apiService";

import Container from "../components/Container";
import MovieCard from "../components/MovieCard";
import Cast from "../components/Cast";
import Reviews from "../components/Reviews";
import routes from "../routes";

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

  handleGoBack = () => {
    const { location, history } = this.props;

    history.push(
      location?.state?.from
        ? location.state.from.pathname + location.state.from.search
        : routes.home
    );
  };

  render() {
    const {
      title,
      vote_average,
      overview,
      genres,
      poster_path,
    } = this.state.movie;

    const { match, location } = this.props;
    const { url, path } = match;

    return (
      <Container>
        <button type="button" onClick={this.handleGoBack}>
          &#8592; Go back
        </button>
        <MovieCard
          title={title}
          vote_average={vote_average}
          overview={overview}
          genres={genres}
          poster_path={poster_path}
        />
        <p>Additional information</p>
        <ul>
          <li>
            <Link
              to={{
                pathname: `${url}/cast`,
                state: { from: location.state.from },
              }}
            >
              Cast
            </Link>
          </li>
          <li>
            <Link
              to={{
                pathname: `${url}/reviews`,
                state: { from: location.state.from },
              }}
            >
              Reviews
            </Link>
          </li>
        </ul>
        <Route path={`${path}/cast`} component={Cast} />
        <Route path={`${path}/reviews`} component={Reviews} />
      </Container>
    );
  }
}

export default MovieDetailsPage;
