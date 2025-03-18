import React from "react";
import "./CartOptions.css";
import CartService from "../../../../services/CartService/CartService";

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

    emptyCartMessage = ()=>{
        const cart = CartService.getCart();

        if(cart === null || cart.length === 0){
            return (
                <>
                    <button onClick={()=>{this.props.history.push("/menu")}}>Start order</button>
                </>
            );
        } else{
            return (
                <>
                    <button onClick={this.editCart}>Edit</button>
                    <button onClick={this.checkOutCart}>Checkout</button>
                </>
            );
        };
    }

    render(){
        return (
            <section id="cart-options-section" onMouseLeave={this.closeOptions}>
                {this.emptyCartMessage()}
            </section>
        );
    };
}