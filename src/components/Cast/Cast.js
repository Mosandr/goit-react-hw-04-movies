import { Component } from "react";
import api from "../../utils/apiService";
import styles from "./Cast.module.scss";

class Cast extends Component {
  state = { castList: [] };

  componentDidMount() {
    const { match } = this.props;
    const movieId = match.params.movieId;

    api
      .fetchMovieCastById(movieId)
      .then((castList) => {
        this.setState({ castList });
      })
      .catch((error) => console.log(error));
  }

  render() {
    const { castList } = this.state;

    return (
      <ul>
        {castList.length > 0 &&
          castList.map(({ id, name, character, profile_path }) => {
            return (
              <li key={id}>
                <div className={styles.imgThumb}>
                  <img
                    className={styles.castImg}
                    src={profile_path}
                    alt={
                      profile_path ? `${name} portrait` : `No foto available`
                    }
                  />
                </div>
                <p>{name}</p>
                <p>{`Character: ${character}`}</p>
              </li>
            );
          })}
      </ul>
    );
  }
}

export default Cast;
