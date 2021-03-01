import React from "react";
import AppContext from "../../../../../../contexts/ContextContainer/AppContext/AppContext";

export default class OrderPlacedMessage extends React.Component{

    static contextType = AppContext;

    setOrderDefault = ()=>{
        this.context.ordersContext.setDefaultOrder();
        this.removeCartItems();
        this.props.history.push("/customer/orders");
    }

    removeCartItems = ()=>{
        this.context.cartContext.setDefault();
    }

    render(){
        return (
            <section>
                <p>Your order has been placed!</p>

                <button onClick={this.setOrderDefault}>Ok thanks!</button>
            </section>
        );
    };
}