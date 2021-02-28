import { render } from "@testing-library/react";
import React from "react";
import CartItemOptions from "./CartItemOptions/CartItemOptions";

export default class CartItem extends React.Component{
    render(){
        console.log(this.props.cartItem)
        return (
            <section>
                <h3>{this.props.cartItem.name}</h3>
                <p>${this.props.cartItem.price}</p>

                <CartItemOptions menuItem={this.props.cartItem}/>
            </section>
        );
    }
}