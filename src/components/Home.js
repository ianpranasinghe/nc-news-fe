import React, { Component } from "react";
import ArticlesList from "./ArticlesList";

class Articles extends Component {
  componentDidMount() {}

  render() {
    return (
      <>
        <ArticlesList isLoading={this.props.isLoading} />
      </>
    );
  }
}

export default Articles;
