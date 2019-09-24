import React, { Component } from "react";
import * as api from "../api-requests";

class Votes extends Component {
  state = {
    voteValue: null,
    hasVoted: false,
    votes: null,
    color: "red"
  };

  componentDidMount() {
    const { votes } = this.props;
    this.setState({ votes: votes });
  }

  articlesVoting = () => {
    const { hasVoted, voteValue, votes } = this.state;
    const { comment_id, article_id } = this.props;

    if (comment_id) {
      if (!hasVoted) {
        const newVoteValue = votes + voteValue;
        this.setState({ votes: newVoteValue, hasVoted: true });
        api.commentVote(comment_id, voteValue);
      }
    } else if (article_id) {
      if (!hasVoted) {
        const newVoteValue = votes + voteValue;
        this.setState({ votes: newVoteValue, hasVoted: true });
        api.articleVote(article_id, voteValue);
      }
    }
  };

  vote = value => {
    this.setState({ voteValue: value, color: "darkgray" }, () => {
      this.articlesVoting();
    });
  };

  render() {
    const { votes } = this.state;

    return (
      <div id="votesContainer">
        <i
          id="1"
          onClick={() => {
            this.vote(1);
          }}
          className="fas fa-arrow-circle-up"
          style={{ color: this.state.color }}
        ></i>
        <h4>{votes}</h4>
        <p>votes</p>
        <i
          id="-1"
          onClick={() => {
            this.vote(-1);
          }}
          className="fas fa-arrow-circle-down"
          style={{ color: this.state.color }}
        ></i>
      </div>
    );
  }
}

export default Votes;
