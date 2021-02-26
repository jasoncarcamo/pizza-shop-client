import React from "react";
import CustomerTokenService from "../../../services/CustomerTokenService/CustomerTokenService";

export default class cart extends React.Component{

    renderCart = ()=>{
        return (
            <section id="cart-container">
                Cart
            </section>
        );
    }

    render(){
        return CustomerTokenService.hasToken() ? this.renderCart() : "";
    };
}