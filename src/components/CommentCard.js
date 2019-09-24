import React from "react";
import Votes from "./Votes";
import DeleteComment from "./DeleteComment";

function CommentCard(props) {
  const {
    comment_id,
    author,
    votes,
    created_at,
    body,
    deleteComment,
    user
  } = props;
  return (
    <div id="comment">
      <Votes votes={votes} comment_id={comment_id} />
      <h4>{author}</h4>
      <p className="body">{body}</p>
      <p className="date">{new Date(created_at).toUTCString()}</p>
      {user === author ? (
        <DeleteComment deleteComment={deleteComment} comment_id={comment_id} />
      ) : null}
    </div>
  );
}

export default CommentCard;
