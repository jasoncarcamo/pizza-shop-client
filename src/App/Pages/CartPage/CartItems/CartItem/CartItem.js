import React from "react";
import CartItemOptions from "./CartItemOptions/CartItemOptions";
import "./CartItem.css";

export default class CartItem extends React.Component{
    render(){
        return (
            <section className="order-item-section">
                <h3>{this.props.cartItem.name}</h3>
                <p><strong className="order-item-strong">Special requests:</strong> {this.props.cartItem.special_request ? this.props.cartItem.special_request : "None provided"}</p>
                <p><strong className="order-item-strong">Size:</strong> {this.props.cartItem.size}</p>
                <p><strong className="order-item-strong">Quantity:</strong> {this.props.cartItem.quantity}</p>
                <p><strong className="order-item-strong">Price:</strong> ${this.props.cartItem.price}</p>

                <CartItemOptions index={this.props.index} menuItem={this.props.cartItem}/>
            </section>
        );
    }
}