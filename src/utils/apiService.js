import axios from "axios";
const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "62af7111fb0063930df9c7b53547034d";
const IMG_APPEND = "https://image.tmdb.org/t/p/w500";

const names = {
  trendings: "/trending/movie/day",
  search: "/search/movie",
  movie: "/movie/",
};

class ApiService {
  fetchTrandingMovies() {
    return axios
      .get(`${BASE_URL}${names.trendings}?api_key=${API_KEY}`)
      .then((response) => response.data.results);
  }

  fetchSearchMovies(query) {
    return axios
      .get(`${BASE_URL}${names.search}?api_key=${API_KEY}&query=${query}`)
      .then((response) => response.data.results);
  }

  fetchMoviesById(id) {
    return axios
      .get(`${BASE_URL}${names.movie}${id}?api_key=${API_KEY}`)
      .then((response) => {
        const data = response.data;
        const backdrop_path = data.backdrop_path
          ? IMG_APPEND + data.backdrop_path
          : data.backdrop_path;
        const poster_path = data.poster_path
          ? IMG_APPEND + data.poster_path
          : data.poster_path;
        const preperedData = { ...data, backdrop_path, poster_path };
        return preperedData;
      });
  }

  fetchMovieCastById(id) {
    return axios
      .get(`${BASE_URL}${names.movie}${id}/credits?api_key=${API_KEY}`)
      .then((response) => {
        const data = response.data.cast;
        const preperedData = data.map((cast) => {
          const profile_path = cast.profile_path
            ? IMG_APPEND + cast.profile_path
            : cast.profile_path;
          return { ...cast, profile_path };
        });

        return preperedData;
      });
  }

  fetchMovieReviewsById(id) {
    return axios
      .get(`${BASE_URL}${names.movie}${id}/reviews?api_key=${API_KEY}`)
      .then((response) => response.data.results);
  }
}

export default new ApiService();
