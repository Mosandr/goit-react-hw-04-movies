import { Component } from "react";

class SearchForm extends Component {
  state = { searchQuery: "" };

  handleChange = (event) => {
    this.setState({ searchQuery: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.searchQuery);
    this.setState({ searchQuery: "" });
  };

  render() {
    const { searchQuery } = this.state;
    return (
      <form onSubmit={this.onFormSubmit}>
        <input
          value={searchQuery}
          onChange={this.handleChange}
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default SearchForm;
