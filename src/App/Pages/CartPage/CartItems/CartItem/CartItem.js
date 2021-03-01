import React from "react";
import CartItemOptions from "./CartItemOptions/CartItemOptions";

export default class CartItem extends React.Component{
    render(){
        return (
            <section>
                <h3>{this.props.cartItem.name}</h3>
                <p>${this.props.cartItem.price}</p>
                <p>Quantity: {this.props.cartItem.quantity}</p>

                <CartItemOptions index={this.props.index} menuItem={this.props.cartItem}/>
            </section>
        );
    }
}