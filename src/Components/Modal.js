import React from "react";

export default class Modal extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    handleModal=()=>{
        this.props.handleModal()
    }
    render(){
        const {data}=this.props;
       return(
           <div id="myModal" className="modal" style={{ display: this.props.toggle ? 'block' : 'none' }}>
               <div className="modal-content">
                   <span className="close" onClick={this.handleModal}>&times;</span>
                   <p className="popup popup-qty">QTY : {data.totalQty}</p>
                   <p className="popup popup-total">TOTAL : {data.total}</p>
                   <p className="popup popup-success">Transaction successful</p>
               </div>
           </div>
       )
    }
}