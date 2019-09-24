import React, { Component } from "react";
import Votes from "./Votes";
import DeleteComment from "./DeleteComment";

class CommentCard extends Component {
  render() {
    const {
      comment_id,
      author,
      votes,
      created_at,
      body,
      deleteComment,
      user
    } = this.props;
    return (
      <div id="comment">
        <Votes votes={votes} id={comment_id} />
        <h4>{author}</h4>
        <p class="body">{body}</p>
        <p class="date">{new Date(created_at).toUTCString()}</p>
        {user === author ? (
          <DeleteComment
            deleteComment={deleteComment}
            comment_id={comment_id}
          />
        ) : null}
      </div>
    );
  }
}

export default CommentCard;