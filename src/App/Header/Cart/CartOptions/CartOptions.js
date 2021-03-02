import React from "react";
import "./CartOptions.css";

export default class CartOptions extends React.Component{

    editCart = ()=>{
        this.toggleOptions();
        this.toggleMobileMenu();
        this.props.history.push("/cart/edit");
    }

    checkOutCart = ()=>{
        this.toggleOptions();
        this.toggleMobileMenu();
        this.props.history.push("/cart/checkout");
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