import React from "react";
import "./OrderItem.css";

export default class OrderItem extends React.Component{
    render(){
        return (
            <section className="order-item-section">
                <h3>{`${this.props.orderItem.quantity}x ${this.props.orderItem.name}`}</h3>
                <p><strong className="order-item-strong">Special requests:</strong> {this.props.orderItem.special_request ? this.props.orderItem.special_request : "None provided"}</p>
                <p><strong className="order-item-strong">Size:</strong> {this.props.orderItem.size}</p>
                <p><strong className="order-item-strong">Price:</strong> ${this.props.orderItem.price}</p>
            </section>
        )
    }
}