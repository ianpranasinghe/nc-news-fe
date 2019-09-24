import React from "react";
import { Link } from "@reach/router";

class Navigation extends React.Component {
  handleSignInClick = () => {
    this.props.toggleSignIn();
  };

  handleSignOut = () => {
    this.props.removeUser();
  };

  render() {
    return (
      <div id="navBar" key="nav">
        <Link to="/">
          <img src="/nc-news.png" alt="NorthCoders News" />
        </Link>
        <div id="signIncontainer">
          {!this.props.user ? (
            <div id="signin_loggedout">
              <button onClick={this.handleSignInClick}>Sign In</button>
            </div>
          ) : (
            <div id="signout_loggedin">
              <button id="signout_loggedin_button" onClick={this.handleSignOut}>
                Sign Out
              </button>
              <p>{this.props.user}</p>
              <div id="imageCropper">
                <img src={this.props.userAvatar} alt="profilePic" />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Navigation;
