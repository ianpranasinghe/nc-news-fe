import React, { Component } from "react";
import { Link } from "@reach/router";
class SortBy extends Component {
  handleSortChange = event => {
    const { id } = event.target;
    this.props.sortByRequest(id);
  };

  render() {
    return (
      <>
        <div id="sortByContainer">
          <div id="left">
            <Link to="/">
              <p>Latest</p>
            </Link>
            <Link to="/topics/coding">
              <p className="topicsItem">Coding</p>
            </Link>
            <Link to="/topics/football">
              <p className="topicsItem">Football</p>
            </Link>
            <Link to="/topics/cooking">
              <p className="topicsItem">Cooking</p>
            </Link>
          </div>
          <div id="right">
            <h5>Sort By</h5>
            <p id="created_at" onClick={this.handleSortChange}>
              Most Recent
            </p>
            <p id="comment_count" onClick={this.handleSortChange}>
              Highest Comment
            </p>
            <p id="votes" onClick={this.handleSortChange}>
              Highest Votes
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default SortBy;
