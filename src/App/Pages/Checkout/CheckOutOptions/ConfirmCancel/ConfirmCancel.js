import React from "react";
import AppContext from "../../../../../contexts/ContextContainer/AppContext/AppContext";
import "./ConfirmCancel.css";

export default class ConfirmCancel extends React.Component{

    static contextType = AppContext;

    toggleCancelOrder = ()=>{
        this.props.toggleCancelOrder();
    }

    handleCancel = ()=>{
        this.context.cartContext.setDefault();
        this.context.ordersContext.cancelOrder();
    }

    render(){
        return (
            <section id="confirm-cancel-order-section">
                <p>Are you sure you want to cancel?</p>

                <div id="confirm-cancel-order-options">
                    <button onClick={this.handleCancel}>Yes</button>
                    <button onClick={this.toggleCancelOrder}>No</button>
                </div>
            </section>
        );
    };
}