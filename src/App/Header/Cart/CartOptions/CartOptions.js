import React from "react";
import "./CartOptions.css";

export default class CartOptions extends React.Component{

    editCart = ()=>{
        this.props.history.push("/cart/edit");
    }

    checkOutCart = ()=>{
        this.props.history.push("/cart/checkout");
    }

    render(){
        return (
            <section id="cart-options-section" onMouseLeave={this.props.closeOptions}>
                <button onClick={this.editCart}>Edit</button>
                <button onClick={this.checkOutCart}>Checkout</button>
            </section>
        );
    };
}