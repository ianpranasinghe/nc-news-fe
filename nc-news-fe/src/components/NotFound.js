import React, { Component } from "react";

class NotFound extends Component {
  render() {
    const { status, msg } = this.props.errData;
    console.log(status, msg, "Chick");
    return (
      <div>
        {status}
        <br />
        {msg}
        <br />
        Sorry Noubt Here
      </div>
    );
  }
}

export default NotFound;
