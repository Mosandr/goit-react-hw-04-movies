import { Route, Switch } from "react-router-dom";
import HomePage from "./views/HomePage";
import MoviesPage from "./views/MoviesPage";
import MovieDetailsPage from "./views/MovieDetailsPage";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact="/movies/:movieId" component={MoviesPage} />
        <Route path="/movie" component={MoviesPage} />
      </Switch>
    </>
  );
};

export default App;
