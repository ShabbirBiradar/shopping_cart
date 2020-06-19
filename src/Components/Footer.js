import React, { Component } from "react";
import "./style.css";
import Button1 from "./Button1";

class Footer extends Component {
  constructor(props){
    super(props);
    this.state={
      toggle: true,
    }
  }

  checkout=()=>{
    this.props.checkout()
  }
  render() {
    const {data}=this.props;
    return (
      <div className="footer-container">
        <div className="footer-left">
          <div className="qty">
            <span>QTY {data.totalQty} </span>
          </div>
          <div className="total">
            <span>TOTAL {data.total} </span>
          </div>
        </div>
        <div className="footer-right">
          <Button1 
          name="CHECKOUT"
            onClick={()=>this.checkout()}
          />
        </div>
        
        </div>
    );
  }
}

export default Footer;
