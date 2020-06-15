import React, { Component } from "react";
import "./style.css";
import Footer from "../Components/Footer";
import Card from "../Components/Card";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardData: [
        {
          brandName: "Milk Food",
          productName: "Milk Good Rich Desi Deneder Ghee (Carton)",
          qty: 11,
          price: 408,
          mrf: 489,
          url:
            "http://images.amazon.com/images/P/0596004613.01._PE30_PI_SCMZZZZZZZ_.jpg",
          offerText: "18% OFF"
        },
        {
          brandName: "Milk Food",
          productName: "Milk Good Rich Desi Deneder Ghee (Carton)",
          qty: 11,
          price: 408,
          mrf: 489,
          url:
            "http://images.amazon.com/images/P/0596004613.01._PE30_PI_SCMZZZZZZZ_.jpg",
          offerText: "18% OFF"
        },
        {
          brandName: "Milk Food",
          productName: "Milk Good Rich Desi Deneder Ghee (Carton)",
          qty: 11,
          price: 408,
          mrf: 489,
          url:
            "http://images.amazon.com/images/P/0596004613.01._PE30_PI_SCMZZZZZZZ_.jpg",
          offerText: "18% OFF"
        },
        {
          brandName: "Milk Food",
          productName: "Milk Good Rich Desi Deneder Ghee (Carton)",
          qty: 11,
          price: 408,
          mrf: 489,
          url:
            "http://images.amazon.com/images/P/0596004613.01._PE30_PI_SCMZZZZZZZ_.jpg",
          offerText: "18% OFF"
        },
        {
          brandName: "Milk Food",
          productName: "Milk Good Rich Desi Deneder Ghee (Carton)",
          qty: 11,
          price: 408,
          mrf: 489,
          url:
            "http://images.amazon.com/images/P/0596004613.01._PE30_PI_SCMZZZZZZZ_.jpg",
          offerText: "18% OFF"
        },
        {
          brandName: "Milk Food",
          productName: "Milk Good Rich Desi Deneder Ghee (Carton)",
          qty: 11,
          price: 408,
          mrf: 489,
          url:
            "http://images.amazon.com/images/P/0596004613.01._PE30_PI_SCMZZZZZZZ_.jpg",
          offerText: "18% OFF"
        },
        {
          brandName: "Milk Food",
          productName: "Milk Good Rich Desi Deneder Ghee (Carton)",
          qty: 11,
          price: 408,
          mrf: 489,
          url:
            "http://images.amazon.com/images/P/0596004613.01._PE30_PI_SCMZZZZZZZ_.jpg",
          offerText: "18% OFF"
        },
        {
          brandName: "Milk Food",
          productName: "Milk Good Rich Desi Deneder Ghee (Carton)",
          qty: 11,
          price: 408,
          mrf: 489,
          url:
            "http://images.amazon.com/images/P/0596004613.01._PE30_PI_SCMZZZZZZZ_.jpg",
          offerText: "18% OFF"
        },
        {
          brandName: "Milk Food",
          productName: "Milk Good Rich Desi Deneder Ghee (Carton)",
          qty: 11,
          price: 408,
          mrf: 489,
          url:
            "http://images.amazon.com/images/P/0596004613.01._PE30_PI_SCMZZZZZZZ_.jpg",
          offerText: "18% OFF"
        },
        {
          brandName: "Milk Food",
          productName: "Milk Good Rich Desi Deneder Ghee (Carton)",
          qty: 11,
          price: 408,
          mrf: 489,
          url:
            "http://images.amazon.com/images/P/0596004613.01._PE30_PI_SCMZZZZZZZ_.jpg",
          offerText: "18% OFF"
        }
      ]
    };
  }
  render() {
    return (
      <React.Fragment>
        <div className="main-container">
          <div className="card-container">
            <Card cardData={this.state.cardData} />
          </div>
          <div className="footer">
            <Footer />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Dashboard;
