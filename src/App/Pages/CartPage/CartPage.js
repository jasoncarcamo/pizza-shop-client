import React from "react";
import {Route} from "react-router-dom";
import CartItems from "./CartItems/CartItems";

export default class CartPage extends React.Component{
    render(){
        return (
            <section id="cart-page-section">
                <CartItems history={this.props.history}/>
            </section>
        );
    };
}