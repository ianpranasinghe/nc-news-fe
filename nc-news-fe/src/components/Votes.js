import React, { Component } from "react";
import * as api from "../api-requests";

class Votes extends Component {
  state = {
    voteValue: null,
    hasVoted: false,
    votes: this.props.votes
  };

  articlesVoting = () => {
    const { hasVoted, voteValue, votes } = this.state;
    const { article_id } = this.props;
    if (!hasVoted) {
      api.articleVote(article_id, voteValue).then(() => {
        this.setState(
          currentState => {
            return (currentState.votes += currentState.voteValue);
          },
          () => {
            this.setState({ hasVoted: true });
          }
        );
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

export default Votes;
