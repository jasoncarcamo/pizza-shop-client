import React from "react";
import AppContext from "../../../../contexts/ContextContainer/AppContext/AppContext";
import ConfirmCancel from "./ConfirmCancel/ConfirmCancel";
import ConfirmPlace from "./ConfirmPlace/ConfirmPlace";
import "./CheckOutOptions.css";
import OrderTypeOptions from "./OrderTypeOptions/OrderTypeOptions";

export default class CheckOutOptions extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            cancelOrder: false,
            placeOrder: false
        }
    }

    static contextType = AppContext;

    toEditCart = ()=>{
        this.props.history.push("/cart/edit");
    }

    toggleCancelOrder = ()=>{
        this.setState({
            cancelOrder: !this.state.cancelOrder
        });
    }

    togglePlaceOrder = ()=>{
        this.setState({
            placeOrder: !this.state.placeOrder
        });
    }

    renderRoundedTotal = ()=>{
        const subtotal = this.props.order.subtotal;

        if(!subtotal){
            return "";
        } else{
            return subtotal.toFixed(2);
        }
    }

    render(){
        return (
           <section className="checkout-options">

                <p><strong>Name: </strong>{this.props.order.customer_first_name} {this.props.order.customer_last_name}</p>
                <p><strong>Price: </strong>${this.renderRoundedTotal()}</p>
                
                <OrderTypeOptions order={this.props.order}/>
               
                <div className="checkout-options-container">
                    <button className="checkout-options-place-order" onClick={this.togglePlaceOrder}>Place order</button>
                    <button onClick={this.toEditCart}>Edit cart</button>
                    <button onClick={this.toggleCancelOrder}>Cancel order</button>
                </div>

                {this.state.cancelOrder ? <ConfirmCancel toggleCancelOrder={this.toggleCancelOrder}/> : ""}
                {this.state.placeOrder ? <ConfirmPlace order={this.props.order} togglePlaceOrder={this.togglePlaceOrder} history={this.props.history}/> : ""}
           </section> 
        );
    };
}