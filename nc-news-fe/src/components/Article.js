import React, { Component } from "react";
import * as api from "../api-requests";
import Comments from "./Comments";
import Votes from "./Votes";
import AddComment from "./AddComment";
import NotFound from "./NotFound";

class Article extends Component {
  state = {
    article: [],
    isLoading: true,
    user: null,
    commentAdded: false,
    err: null
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    this.fetchArticles();
    this.setState({ user: this.props.user });
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.fetchArticles();
      this.setState({ user: this.props.user });
    }
  }

  updateAfterComment = () => {
    this.setState({ commentAdded: true });
  };

  fetchArticles = () => {
    const { article_id } = this.props;
    api
      .getArticle(article_id)
      .then(data => {
        this.setState({ article: data, isLoading: false });
      })
      .catch(({ response }) => {
        const { status } = response;
        const { msg } = response.data;
        this.setState({ isLoading: false, err: { status, msg } });
      });
  };

  render() {
    if (this.state.isLoading) return <p>loading</p>;
    if (this.state.err) return <NotFound errData={this.state.err} default />;
    const {
      article_id,
      author,
      body,
      created_at,
      title,
      topic,
      votes
    } = this.state.article;

    return (
      <>
        <div id="article">
          <Votes votes={votes} article_id={article_id} />
          <p class="title">{title}</p>
          <p class="author">Posted By {author}</p>
          <p class="date">{new Date(created_at).toUTCString()}</p>
          <p class="body">{body}</p>
        </div>
        <div id="commentsContainer">
          {this.state.user ? (
            <AddComment
              user={this.props.user}
              article_id={article_id}
              updateAfterComment={this.updateAfterComment}
            />
          ) : null}

          <Comments article_id={article_id} user={this.props.user} />
        </div>
      </>
    );
  }
}

export default Article;
