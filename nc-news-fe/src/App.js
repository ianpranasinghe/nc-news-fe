import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import * as api from "./api-requests";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Topics from "./components/Topics";
import Article from "./components/Article";
import Popup from "./components/Popup";

class App extends React.Component {
  state = {
    SignedIn: "Sign In",
    showPopup: false,
    users: [],
    user: null,
    userAvatar: ""
  };
  componentDidMount() {
    this.fetchUsers();
  }

  toggleSignIn = () => {
    this.setState({ showPopup: !this.state.showPopup });
  };

  fetchUsers = () => {
    api.getUsers().then(data => {
      this.setState({ users: data });
    });
  };

  chooseUser = user => {
    this.setState({ user: user });
    const { users } = this.state;
    users.map(person => {
      if (person.username === user) {
        this.setState({ userAvatar: person.avatar_url });
      }
    });
  };

  removeUser = () => {
    this.setState({ user: null });
  };

  render() {
    return (
      <>
        <Navigation
          toggleSignIn={this.toggleSignIn}
          removeUser={this.removeUser}
          user={this.state.user}
          userAvatar={this.state.userAvatar}
        />
        <Router>
          <Home path="/" />
          <Topics path="topics/:topic" />
          <Article path="topics/:topic/:article_id" user={this.state.user} />
          <Article path="/:article_id" user={this.state.user} />
        </Router>
        {this.state.showPopup ? (
          <Popup
            closePopup={this.toggleSignIn.bind(this)}
            users={this.state.users}
            chooseUser={this.chooseUser}
          />
        ) : null}
      </>
    );
  }
}

export default App;
