import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import routes from "../../routes";

const MoviesList = ({ movies, location }) => {
  return (
    <ul>
      {movies.map(({ id, title }) => {
        return (
          <li key={id}>
            <Link
              to={{
                pathname: `${routes.movies}/${id}`,
                state: { from: location },
              }}
            >
              {title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default withRouter(MoviesList);

PropTypes.MoviesList = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};
