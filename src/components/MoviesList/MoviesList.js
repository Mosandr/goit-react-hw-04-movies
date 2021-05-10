import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import routes from "../../routes";

const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ id, title }) => {
        return (
          <li key={id}>
            <Link to={`${routes.movies}${id}`}>{title}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MoviesList;

PropTypes.MoviesList = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
