import React, { Component } from "react";
import * as api from "../api-requests";
import { Link } from "@reach/router";
import Votes from "./Votes";
import SortBy from "./SortBy";
import NotFound from "./NotFound";
import Loading from "./Loading";

class ArticlesList extends Component {
  state = {
    articles: [],
    err: null,
    isLoading: true
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    this.fetchArticles();
  }

  componentDidUpdate(prevProps, prevStates) {
    window.scrollTo(0, 0);
    if (prevProps !== this.props) {
      const { topic } = this.props;
      this.fetchArticles(topic);
    }
  }

  fetchArticles = (topic, sort_by) => {
    api
      .getArticles(topic, sort_by)
      .then(data => {
        this.setState({ articles: data, isLoading: false });
      })
      .catch(({ response }) => {
        const { status } = response;
        const { msg } = response.data;
        this.setState({ isLoading: false, err: { status, msg } });
      });
  };

  sortBy = sortQuery => {
    const { topic } = this.props;
    this.fetchArticles(topic, sortQuery);
  };

  orderBy = orderQuery => {
    // To be added later - this does nothing at the moment
    // const { topic } = this.props;
    // this.fetchArticles(topic, orderQuery);
  };

  render() {
    const { articles, err } = this.state;
    if (this.state.isLoading) return <Loading />;
    if (err) return <NotFound errData={this.state.err} default />;

    return (
      <div id="container">
        <SortBy sortByRequest={this.sortBy} orderByRequest={this.orderBy} />
        {articles.map(article => {
          const {
            title,
            votes,
            topic,
            author,
            created_at,
            comment_count,
            article_id
          } = article;
          return (
            <div key={article_id} id="articleListItemContainer">
              <Votes votes={votes} article_id={article_id} />
              <Link key={`linkTo${article_id}`} to={`${article_id}`}>
                <div id="idInfoContainer">
                  <h4>{title}</h4>
                  <p class="author"> Posted by {author}</p>

                  <p>{comment_count} comments</p>
                  <p class="date">
                    Submitted on {new Date(created_at).toUTCString()} to {topic}
                  </p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ArticlesList;
