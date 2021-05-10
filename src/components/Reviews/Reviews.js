import { Component } from "react";
import api from "../../utils/apiService";
// import styles from "./Reviews.module.scss";

class Reviews extends Component {
  state = { reviews: [] };

  componentDidMount() {
    const { match } = this.props;
    const movieId = match.params.movieId;

    api
      .fetchMovieReviewsById(movieId)
      .then((reviews) => {
        this.setState({ reviews });
      })
      .catch((error) => console.log(error));
  }

  render() {
    const { reviews } = this.state;

    if (reviews.length === 0)
      return <p>We don't have any reviws for this movie</p>;

    return (
      <ul>
        {reviews.length > 0 &&
          reviews.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <h3>{`Author: ${author}`}</h3>
                <p>{content}</p>
              </li>
            );
          })}
      </ul>
    );
  }
}

export default Reviews;

// author: "TheDarkKnight31"
// content: "I will be short. You should
