import React, { Component } from "react";
import "./style.css";
import Button1 from "./Button1";

class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
        <div className="footer-left">
          <div className="qty">
            <span>QTY : </span>
          </div>
          <div className="total">
            <span>TOTAL : </span>
          </div>
        </div>
        <div className="footer-right">
          <Button1 
          name="CHECKOUT"
          />
        </div>
      </div>
    );
  }
}

export default Footer;
