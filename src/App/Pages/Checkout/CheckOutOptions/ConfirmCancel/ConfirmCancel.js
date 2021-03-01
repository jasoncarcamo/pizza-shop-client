import React from "react";
import AppContext from "../../../../../contexts/ContextContainer/AppContext/AppContext";

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
            <section>
                <p>Are you sure you want to cancel?</p>

                <div>
                    <button onClick={this.handleCancel}>Yes</button>
                    <button onClick={this.toggleCancelOrder}>No</button>
                </div>
            </section>
        );
    };
}