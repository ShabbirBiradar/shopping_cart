import React, { Component } from "react";
import Button1 from "./Button1";
import Button2 from "./Button2";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.cardData
    };
  }
  render() {
    return (
      <div className="main-card">
        {this.state.data.map((i, k) => (
          <div className="card-body">
            <div className="left-card-body">
              <div className="product-image">
                <img className="product-img" alt="No Image Found" src={i.url} />
              </div>
              <div className="product-off-text">{i.offerText}</div>
            </div>
            <div className="right-card-body">
              <div className="product product-brand">{i.brandName}</div>
              <div className="product product-name">{i.productName}</div>
              <div className="product product-qty">{i.qty}</div>
              <div className="product product-mrp">MRP {i.mrp}</div>
              <div className="product product-rs">RS {i.price}</div>
              <div className="product-btns">
                <div className="btn-add-cart">
                  <Button1 name="ADD CART" />
                </div>
                <div className="btn-inc-desc">
                  <span>
                    <Button2 name="+" />
                  </span>
                  <span className="inc-desc-value">0</span>
                  <span>
                    <Button2 name="-" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Card;
