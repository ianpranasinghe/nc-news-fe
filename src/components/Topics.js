import React, { Component } from "react";
import ArticlesList from "./ArticlesList";
import Article from "./Article";
import { Router } from "@reach/router";

class Topics extends Component {
  render() {
    return (
      <>
        <ArticlesList
          topic={this.props.topic}
          isLoading={this.props.isLoading}
        />
        <Router>
          <Article path="/:article_id" />
        </Router>
      </>
    );
  }
}

export default Topics;
