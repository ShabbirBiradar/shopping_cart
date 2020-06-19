import React, { Component } from "react";

class Button1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "CHECKOUT"
    };
  }
  render() {
    return (
      <div className="btn">
        <button className="btn-rectangle" onClick={this.props.onClick}> {this.props.name}</button>
      </div>
    );
  }
}

export default Button1;
