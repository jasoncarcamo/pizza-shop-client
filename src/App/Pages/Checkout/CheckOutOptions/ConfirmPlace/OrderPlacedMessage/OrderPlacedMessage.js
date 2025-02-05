import React from "react";
import AppContext from "../../../../../../contexts/ContextContainer/AppContext/AppContext";
import "./OrderPlacedMessage.css";

export default class OrderPlacedMessage extends React.Component{

    static contextType = AppContext;

    setOrderDefault = ()=>{
        this.context.ordersContext.setDefaultOrder();
        this.removeCartItems();
        this.props.history.push("/menu/pizza");
    }

    removeCartItems = ()=>{
        this.context.cartContext.setDefault();
    }

    render(){
        return (
            <section id="order-placed-section">
                <p>Your order has been placed!</p>

                <button onClick={this.setOrderDefault}>Yaye!</button>
            </section>
        );
    };
}