import React from "react";
import "./CartOptions.css";

export default class CartOptions extends React.Component{

    editCart = ()=>{
        this.toggleOptions();
        this.props.history.push("/cart/edit");
        this.toggleMobileMenu();
    }

    checkOutCart = ()=>{
        this.toggleOptions();
        this.props.history.push("/cart/checkout");
        this.toggleMobileMenu();
    }

    closeOptions = ()=>{
        this.props.closeOptions();
    }

    toggleOptions = ()=>{
        this.props.toggleOptions();
    }

    toggleMobileMenu = ()=>{
        this.props.toggleMobileMenu();
    }

    render(){
        return (
            <section id="cart-options-section" onMouseLeave={this.closeOptions}>
                <button onClick={this.editCart}>Edit</button>
                <button onClick={this.checkOutCart}>Checkout</button>
            </section>
        );
    };
}