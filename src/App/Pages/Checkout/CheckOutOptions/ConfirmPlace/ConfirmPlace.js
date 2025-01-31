import React from "react";
import OrderRequest from "../../../../../services/FetchRequests/OrderRequest";
import AppContext from "../../../../../contexts/ContextContainer/AppContext/AppContext";
import CustomerTokenService from "../../../../../services/CustomerTokenService/CustomerTokenService";
import OrderPlacedMessage from "./OrderPlacedMessage/OrderPlacedMessage";
import "./ConfirmPlace.css";

export default class ConfirmPlace extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            loading: false,
            orderPlaced: false
        }
    }

    static contextType = AppContext;

    togglePlaceOrder = ()=>{
        this.props.togglePlaceOrder();
    }

    renderOptions = ()=>{
        return (
            <div id="confirm-order-options">
                <button onClick={this.placeOrder}>Yes</button>
                <button onClick={this.togglePlaceOrder}>No</button>
            </div>
        );
    }

    placeOrder = ()=>{
        const cart = this.context.cartContext.cart;
        const order = this.context.ordersContext.order;
        const token = CustomerTokenService.getToken();

        order.order_items = cart;
        order.subtotal = this.props.order.subtotal;
        order.customer_id = this.context.customerContext.customer.id || 0;
        order.time_placed = new Date();
        order.time_ready = new Date();
        order.date_created = new Date();
        
        this.setState({
            error: "",
            loading: true
        });

        OrderRequest.createOrder(token, order)
            .then( resData => {
                this.setState({
                    loading: false,
                    orderPlaced: true
                });
            })
            .catch( err => {
                this.setState({
                    error: err.error,
                    loading: false
                });
            })

    }

    render(){
        console.log(this.context)
        return (
            <section id="confirm-order-section">
                <p>Place order?</p>

                {!this.state.loading ? this.renderOptions() : <p>Loading...</p>}
                {this.state.orderPlaced ? <OrderPlacedMessage history={this.props.history}/> : ""}
            </section>
        )
    }
}