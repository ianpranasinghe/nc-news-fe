import React from "react";

class Popup extends React.Component {
  state = {
    chosenUser: ""
  };

  handleLoginClick = () => {
    this.props.closePopup();
    const { chosenUser } = this.state;
    this.props.chooseUser(chosenUser);
  };
  handleClosureClick = () => {
    this.props.closePopup();
  };

  handleUserChange = event => {
    const { value } = event.target;
    if (value !== "Choose User") {
      this.setState({ chosenUser: value });
    } else {
      this.setState({ chosenUser: null });
    }
  };

  render() {
    return (
      <div className="popupBackground">
        <div className="popupinner">
          <h1>"Sign In"</h1>

          <select onChange={this.handleUserChange}>
            <option value={null}>Choose User</option>
            {this.props.users.map(user => {
              return (
                <option value={user.username} key={user.username}>
                  {user.username}
                </option>
              );
            })}
          </select>

          <button onClick={this.handleLoginClick}>Log In</button>
          <button onClick={this.handleClosureClick}>X</button>
        </div>
      </div>
    );
  }
}

export default Popup;
