import React, { Component } from "react";
import * as api from "../api-requests";

class CommentVotes extends Component {
  state = {
    voteValue: null,
    hasVoted: false,
    votes: null
  };

  componentDidMount() {
    const { votes } = this.props;
    this.setState({ votes: votes });
  }

  articlesVoting = () => {
    const { hasVoted, voteValue, votes } = this.state;
    const { id } = this.props;
    if (!hasVoted) {
      api.commentVote(id, voteValue).then(() => {
        const newVoteValue = votes + voteValue;
        this.setState({ votes: newVoteValue }, () => {
          this.setState({ hasVoted: true });
        });
      });
    }
  };

  vote = value => {
    this.setState({ voteValue: value }, () => {
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
          class="fas fa-arrow-circle-up"
        ></i>
        <h4>{votes}</h4>
        <p>votes</p>
        <i
          id="-1"
          onClick={() => {
            this.vote(-1);
          }}
          class="fas fa-arrow-circle-down"
        ></i>
      </div>
    );
  }
}

export default CommentVotes;
