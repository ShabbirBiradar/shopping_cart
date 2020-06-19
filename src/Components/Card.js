import React, { Component } from "react";
import Button1 from "./Button1";
import Button2 from "./Button2";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.cardData,
      qty: 0,
    };
  }

  increement=(e)=>{
    const {data,qty}=this.state;
    if (qty < data.totalQty){
      this.setState({
        qty: qty + 1
      });
      this.props.increement(data.price, 1)
    }else{
      alert("Not allow more then Actual qty.")
    }
 
  }

  descreement=(e)=>{
    const { data, qty } = this.state;
    if (qty > 0){
      this.setState({
        qty: qty - 1
      });
      this.props.decreement(data.price, 1)
      
    }
  
  }

  addToCart=(e)=>{
    this.props.addToCart()
  }


  render() {
    const { data, qty}= this.state;
    return (
      <div className="main-card">
          <div className="card-body">
            <div className="left-card-body">
              <div className="product-image">
              <img className="product-img" alt="No Image Found" src={data.url} />
              </div>
            <div className="product-off-text">{data.offerText}</div>
            </div>
            <div className="right-card-body">
            <div className="product product-brand">{data.brandName}</div>
            <div className="product product-name">{data.productName}</div>
            <div className="product product-qty">{data.totalQty}</div>
            <div className="product product-mrp">MRP {data.mrp}</div>
            <div className="product product-rs">RS {data.price}</div>
              <div className="product-btns">
                <div className="btn-add-cart">
                  <Button1 name="ADD CART" onClick={()=>this.addToCart()}/>
                </div>
                <div className="btn-inc-desc">
                  <span>
                    <Button2 name="+" onClick={()=>this.increement()}/>
                  </span>
                <span className="inc-desc-value">{qty}</span>
                  <span>
                  <Button2 name="-" onClick={()=>this.descreement()} />
                  </span>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default Card;
