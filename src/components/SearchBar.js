import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };
  onInputChange = (evt) => {
    this.setState({ term: evt.target.value });
  };
  onFormSubmit = (evt) => {
    evt.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };
  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
              // tambien se podria haber escrito asi: e=> this.setState({ term: e.target.value})
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
