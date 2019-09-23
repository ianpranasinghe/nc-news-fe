import React, { Component } from "react";

class DeleteComment extends Component {
  handleDeleteClick = () => {
    const { deleteComment, comment_id } = this.props;
    deleteComment(comment_id);
  };

  render() {
    return (
      <div id="deleteButtonContainer">
        <button onClick={this.handleDeleteClick}>Delete</button>
      </div>
    );
  }
}

export default DeleteComment;
