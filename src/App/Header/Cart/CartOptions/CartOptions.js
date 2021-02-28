import React from "react";

export default class CartOptions extends React.Component{

    editCart = ()=>{
        this.props.history.push("/cart/edit");
    }

    checkOutCart = ()=>{
        this.props.history.push("/cart/checkout");
    }

    render(){
        return (
            <section id="cart-options-section">
                <button onClick={this.editCart}>Edit</button>
                <button onClick={this.checkOutCart}>Checkout</button>
            </section>
        );
    };
}