import React from "react";
import CustomerTokenService from "../../../services/CustomerTokenService/CustomerTokenService";
import AppContext from "../../../contexts/ContextContainer/AppContext/AppContext";

export default class cart extends React.Component{

    static contextType = AppContext;

    render(){
        return (
            <section id="cart-container">
                Cart {this.context.cartContext.cart.length || ""}
            </section>
        );
    };
}