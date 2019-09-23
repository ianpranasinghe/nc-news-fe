import React, { Component } from "react";
import * as api from "../api-requests";

class AddComment extends Component {
  state = {
    commentBody: "",
    user: ""
  };

  componentDidMount() {
    this.setState({ user: this.props.user });
  }

  submitComment = event => {
    event.preventDefault();
    const { article_id, updateAfterComment } = this.props;
    const { user, commentBody } = this.state;
    this.setState({ commentBody: "" });
    api.postComment(article_id, user, commentBody).then(() => {
      updateAfterComment();
    });
  };

  commentOnChange = event => {
    const { value } = event.target;
    this.setState({ commentBody: value });
  };

  render() {
    return (
      <div id="addCommentContainer">
        <form onSubmit={this.submitComment}>
          <p class="date"> Signed in as:{this.props.user}</p>

          <textarea
            placeholder="Add a comment"
            onChange={this.commentOnChange}
            type="text"
            value={this.state.commentBody}
          >
            {" "}
          </textarea>
          <input type="Submit" />
        </form>
      </div>
    );
  }
}

export default AddComment;
