import PropTypes from "prop-types";
import styles from "./MovieCard.module.scss";

const MovieCard = ({ title, vote_average, overview, genres, poster_path }) => {
  const userScore = vote_average * 10;

  return (
    <div className={styles.movieCard}>
      <div className={styles.movieImageThumb}>
        <img
          className={styles.movieImage}
          src={poster_path}
          alt={poster_path ? `${title} poster` : "Poster not available"}
        />
      </div>
      <div className={styles.movieDescription}>
        <h3 className="movieTitle">{title}</h3>
        <p className="movieScore">{`User Score: ${userScore}%`}</p>
        <h4 className="movieOverviewTitle">Overview</h4>
        <p className="movieOverview">{overview}</p>
        <h5 className="movieGenresTitle">Genres</h5>
        <ul className="movieGenresList">
          {genres &&
            genres.map(({ id, name }) => {
              return (
                <li key={id} className="movieGenreItem">
                  {name}
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default MovieCard;

PropTypes.MovieCard = {
  title: PropTypes.string.isRequired,
  vote_average: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  genres: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired,
};
