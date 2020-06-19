import React, { Component } from "react";
import "./style.css";
import Footer from "../Components/Footer";
import Card from "../Components/Card";
import Modal from "../Components/Modal";
import { getJsonData } from "../datastore/index";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      footerData:{
        totalQty: 0,
        total: 0,
        toggle: false,
      },
      cardData: [],
    };
  }

  componentDidMount(){
    getJsonData()
      .then((cardData)=>{
      this.setState({ cardData})
    }).catch((e)=>console.log(e))
  }

  cartIncreement=(price, qty)=>{
    const { footerData } = this.state
    let totalQty = footerData.totalQty + qty;
    let totalPrice = footerData.total + (price * qty);
    this.setTotalData(totalPrice, totalQty);
  }

  cartDecreement = (price, qty)=>{
    const { footerData } = this.state
    let totalQty = footerData.totalQty - qty;
    let totalPrice = footerData.total - (price * qty);
    this.setTotalData(totalPrice, totalQty);
  }

  addToCart = () => {
    const { footerData } = this.state
    this.setTotalData(footerData.total, footerData.totalQty);
  }

  setTotalData = (total, totalQty)=>{
    this.setState({
      footerData: {
        ...this.state.footerData,
        total,
        totalQty
      }
    })
  }

  handleModal=()=>{
    this.setState({
      toggle: !this.state.toggle
    })
  }
  render() {
    const { cardData, footerData, toggle} = this.state;
    return (
      <React.Fragment>    
        <div className="main-container">
         <Modal 
            toggle={toggle}
            handleModal={() => this.handleModal()}
            data={footerData}
         />
          
          <div className="card-container">
            {cardData.map((i,k)=>
              <Card key={k} 
                cardData={i} 
                increement={(price, qty) => this.cartIncreement(price, qty)}
                decreement={(price, qty) => this.cartDecreement(price, qty)}
                addToCart={() => this.addToCart()}
              />          
          )}
          </div>
          <div className="footer">
            <Footer
             data={footerData}
             checkout={()=>this.handleModal()}
             />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Dashboard;
