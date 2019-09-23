import React, { Component } from "react";
import * as api from "../api-requests";

import CommentCard from "./CommentCard";

class Comments extends Component {
  state = {
    comments: [],
    commentsLoading: true,
    user: "",
    deleteRequest: false
  };

  componentDidMount() {
    this.fetchArticlesComments();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props) {
      this.fetchArticlesComments();
      this.setState({ user: this.props.user });
    }
  }

  fetchArticlesComments = () => {
    const { article_id } = this.props;
    api.getArticlesComments(article_id).then(data => {
      this.setState({ comments: data, commentsLoading: false });
    });
  };

  deleteComment = comment_id => {
    api.deleteComment(comment_id).then(() => {
      this.fetchArticlesComments();
    });
  };

  render() {
    if (this.state.commentsLoading) return <p>loading</p>;

    const { comments, user } = this.state;

    return (
      <div id="comments">
        {comments.map(comment => {
          return (
            <CommentCard
              {...comment}
              user={user}
              deleteComment={this.deleteComment}
              key={comment.comment_id}
            />
          );
        })}
      </div>
    );
  }
}

export default Comments;
