import React, { Component } from "react";

class Button2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "CHECKOUT"
    };
  }
  render() {
    return (
      <div className="btn">
        <button className="btn-circle" onClick={this.props.onClick}> {this.props.name}</button>
      </div>
    );
  }
}

export default Button2;
